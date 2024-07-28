// use map to print all array item in paragraph tag let arr = ["banana","apple","orange"];

hello this is my practice questions
// const arr = ["banana", "apple", "orange"];

// const listItems = arr.map(item => `<li><p>${item}</p></li>`).join('\n');

// const ul = document.createElement('ul');
// ul.innerHTML = listItems;

// document.body.appendChild(ul);







// Q.2 ) Longest common prefix
// function longestCommonPrefix(strs) {
//     if (strs.length === 0) return ""; // Return empty string if the array is empty
    
//     // Sort the array of strings
//     strs.sort();
//     let prefix = "";
//     const first = strs[0];
//     const last = strs[strs.length - 1];

//     // Iterate through characters of the first and last strings
//     for (let i = 0; i < first.length; i++) {
//         if (first[i] === last[i]) {
//             prefix += first[i]; // Append the character to the prefix if it matches in both strings
//         } else {
//             break; // Break the loop if the characters don't match
//         }
//     }p
//     return prefix;
// }

// // Example usage:
// const strs = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strs));


// function findMissingNumber(nums) {
//     nums.sort((a, b) => a - b);
//     console.log(nums)
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== i) {
//             return i;
//         }
//     }
//     return nums.length;
// }

// // Example usage:
// const nums = [5, 4, 3, 1, 6];
// console.log("The missing number is:", findMissingNumber(nums));

// javascript
// Copy code
// var missingNumber = function(nums) {
//     let res = nums.length;
// Here, res is initialized to the length of the nums array, which is 3 in our example.

// javascript
// Copy code
//     for (let i = 0; i < nums.length; i++) {
//         res += i - nums[i];
//     }
// The loop iterates over each index i from 0 to nums.length - 1. In each iteration, it calculates i - nums[i]. For example:

// At i = 0, i - nums[i] is 0 - 3, which equals -3.
// At i = 1, i - nums[i] is 1 - 0, which equals 1.
// At i = 2, i - nums[i] is 2 - 1, which equals 1.
// Then, it adds each of these differences to res. So, res becomes 3 - 3 + 1 + 1, which equals 2.

