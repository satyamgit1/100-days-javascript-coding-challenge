// Interview Question: Count Occurrences of Character

// Task:
// Write a function called countChar that takes two parameters: a string and a character to count. 
// The function should return the number of times the specified character appears in the string.

// Example:

function countChar(str, char) {
    // Convert the input string and specified character to lowercase
    str = str.toLowerCase();
    char = char.toLowerCase();
    let count = 0;

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character matches the specified character
        if (str.charAt(i) === char) {
            // Increment count if the characters match
            count++;
        }
    }

    // Return the total count of occurrences
    return count;
}

// Test the function with an example
console.log(countChar("MissIssippi", "I")); // Output: 4



// Test the function with an example

// Constraints:
// - The function should be case-sensitive.
// - The function should handle both lowercase and uppercase characters.
// - The character parameter can be any printable ASCII character.
