//* JavaScript function to increment a large integer represented as an array of digits:
// Example 1:
// Input: digits = [1,2,3]
//  Output: [1,2,4] Explanation:
//   The array represents the integer 123. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4]


function plusOne(digits) {
    // Start from the end of the array
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // If the current digit is less than 9, increment it by 1 and return the array
            digits[i]++;
            return digits;
        } else {
            // If the current digit is 9, set it to 0
            digits[i] = 0;
        }
    }
    
    // If we exit the loop, it means all digits were 9, so we need to add a leading 1
    digits.unshift(1);
    return digits;
}

// Example usage:
let digits = [1, 2, 3];
let result = plusOne(digits);
console.log(result); // Output: [1, 2, 4]

digits = [9, 9, 9];
result = plusOne(digits);
console.log(result); // Output: [1, 0, 0, 0]
