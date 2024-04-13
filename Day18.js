// Coding Challenge
// 17: Write a function to check if a character is uppercase or lowercase.
// Constraints:
// The input char will be a single character.
// The character can be any printable ASCII character.
// You can assume that the input will always be a string of length 1.



// Notes:
// Ensure that the function correctly identifies uppercase characters based on their ASCII values.
// Optimize the function to handle edge cases efficiently.

// 1st method

const isUpperCase = (char) =>{
    if(char.charCodeAt(0) >=65 && char.charCodeAt(0) <=90){
        return true;
    }
    return false;
}

// 2nd method

const isLowerCase = (char) => {
    return char === char.toLowerCase();
}



// The ASCII values for uppercase letters range from 65 to 90,
//  while the ASCII values for lowercase letters range from 97 to 122.

// Example usage:
console.log(isUpperCase("s")); // Output: false
console.log(isLowerCase("s")); // Output: true