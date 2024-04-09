

// 14: Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

// Example usage:

// 2*2 =4
// 2*2*2 = 8
const isPowerOfTwo = (num) => {
    for (let i = 1; i <= num; i++) {
        if (2 ** i === num) {
            return true;
        }
    }
    return false;
};

console.log(isPowerOfTwo(8)); // Output: true
console.log(isPowerOfTwo(7)); // Output: false


// using bitwise operators
// const isPowerOfTwo = (num) => {
//     return num > 0 && (num & (num - 1)) === 0;
// };

// console.log(isPowerOfTwo(8)); // Output: true
// console.log(isPowerOfTwo(7)); // Output: false



// Notes:
// - The input num will be a positive integer.
// - Zero (0) and negative integers are not considered powers of two.
// - The function should return true if the given number is a power of 2, and false otherwise.

// We can solve it using bitwise operators too, but it's your chance to do it and let me know in the comment section.
