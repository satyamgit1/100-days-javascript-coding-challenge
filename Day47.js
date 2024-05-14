//*
//*
//* Programming Challenge: Extract Numbers from a String
//? Write a regular expression to extract all numbers from a given string.
//* Requirements
//? Extract all numbers from a string.
//? Return the numbers as an array.
//* Use Cases
//? Parsing numerical data from text.
//? Extracting numeric values for calculations.
//? Filtering numbers from mixed content.
const  extractNumber = (str) => {
  let regex = /\d+/g;
  return str.match(regex);
};


console.log(extractNumber("abc123defc45"));
console.log(extractNumber("no number here"));
