//* Write a function threeSum(nums) that takes an array of integers nums and returns all unique triplets [a, b, c] in the array which give the sum of zero.

//* Note: The solution set must not contain duplicate triplets.

// * Example
// *Input: [-1, 0, 1, 2, -1, -4]

//* Output: [[-1, -1, 2], [-1, 0, 1]]

// *Input: [0, 0, 0]

//* Output: [[0, 0, 0]]

function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 0, 0]));             // Output: [[0, 0, 0]]
console.log(threeSum([1, 2, -2, -1]));        // Output: []
