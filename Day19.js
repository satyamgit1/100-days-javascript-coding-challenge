
//   Coding Challenge
// 19: Write a function to check if a given string starts with a specific substring.
 
//  @param {string} str - A string (e.g., "Hello world").
//  @param {string} substr - A substring to check if it starts the given string (e.g., "Hello").
//  @returns {boolean} - true if the given string starts with the specified substring, otherwise false.
 

function startsWith(str, substr) {
    // Loop through the length of the substring
    for (let i = 0; i < substr.length; i++) {
        // Check if the characters match
        if (str[i] !== substr[i]) {
            return false; // If any character doesn't match, return false
        }
    }
    return true; // If all characters match, return true
}

// 2nd method 

// // const startsWith = (str,substr) =>{
// //  return str.startsWith(substr);
// }

// 3rd method 
// const startsWith = (str,substr) =>{
//     return str.slice(0, substr.length) === substr;
//    }
   

console.log(startsWith("Hello world", "Hello")); // Output: true
console.log(startsWith("Hello world", "hello")); // Output: false
