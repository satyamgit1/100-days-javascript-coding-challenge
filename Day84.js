//* Find All Disappeared Numbers in an Array Lab

// In this lab, you will be tasked with finding all the disappeared numbers in an array. The array nums will contain n integers where each number, nums[i], is in the range [1, n]. Your task is to return an array of all the integers within the range [1, n] that do not appear in nums. Use the ESM (ECMAScript Module) import/export for this lab.
// Lab Description
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1] Output: [5,6]

// Example 2:

// Input: nums = [1,1] Output: [2]

// Example 3:

// Input: nums = [2,2,3,4,5,6,7,8] Output: [1]


function findDisappearedNumbers(nums) {
    const n = nums.length;

    // Mark the presence of each number
    for (let i = 0; i < n; i++) {
        const index = Math.abs(nums[i]) - 1;
        nums[index] = Math.abs(nums[index]) * -1;
    }

    // Collect the missing numbers
    const result = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}

// Example usage:
const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums1)); // Output: [5, 6]

const nums2 = [1, 1];
console.log(findDisappearedNumbers(nums2)); // Output: [2]

const nums3 = [2, 2, 3, 4, 5, 6, 7, 8];
console.log(findDisappearedNumbers(nums3)); // Output: [1]
