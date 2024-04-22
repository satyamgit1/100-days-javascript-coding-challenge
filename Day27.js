//  Coding Challenge: Repeat a String

// Write a function called repeatString that takes two parameters:
//  str: A string that needs to be repeated.
//  num: An integer representing the number of times the string should be repeated.
//  The function should repeat the input string str the specified number of times num and return the resulting string.
// Example usage:


// const repeatString = function (str, num) {
//     let repeat = "";
//     const maxLength = str.length * num;
//     for (let i = 0; i < num; i++) {
//         if (repeat.length < maxLength) {
//             repeat += str;
//         } else {
//             break; // Exit loop if the maximum length is reached
//         }
//     }
//     return repeat;
// }

// console.log(repeatString("abc", 5)); // Output: "abcabcabcabcabc"

// 2nd method
const repeatString = (str,num) =>{
return  num > 0 ? str.repeat(num): str; // :str mean if num  =0 then simpley return the str
}
console.log(repeatString("abc", 0)); // Output: "abcabcabcabcabc"


//  Constraints:
//  The input string str will contain only alphanumeric characters and punctuation marks.
//  The input number num will be a non-negative integer.
