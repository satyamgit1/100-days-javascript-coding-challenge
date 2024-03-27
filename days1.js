

//* Programming Question: Longest Word in a String

//? Q: Write a function findLongestword that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.
//* Note:

//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.



const findLongestWord = (str) => {
    // Check if the input string is empty or consists only of whitespace
    if (str.trim().length === 0) {
      return false; // Return false if the string is empty
    }
    
    // Split the input string into an array of words
    let words = str.split(" ");
    
    // Sort the words array in descending order of word length
    words = words.sort((a, b) => b.length - a.length);
    
    // Return the first (longest) word from the sorted array
    return words[0];
  };
  
  // Call the function and log the result to the console
  console.log(findLongestWord("Watch Satyam Singh javascript "));
  