// Write a function to determine whether a given string is a palindrome or not.
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.


const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g,"");

 let arr_str = str.split("").reverse().join("");
 return arr_str === str ? true : false;



console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// Constraints:
// - The input string may contain letters, digits, spaces, punctuation, and special characters.
// - The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
// - Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
// - The function should return true if the input string is a palindrome and false otherwise.
