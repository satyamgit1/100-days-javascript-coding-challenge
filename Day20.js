// *
//* Coding Challenge
//*-
//?20. Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.
// Example usage:

// 1st method

// const reverseString = (str) =>{
//     let revstr = "";
//     for(let i=str.length; i>=0; i--){
//      revstr  = revstr + str.charAt(i);

//     }
//     return revstr;
   
// }

// console.log(reverseString("hello")); // Output: olleH


//  2nd method
const reverseString = (str) => {
    // Convert the string to an array of characters
    let charArray = str.split("");
    // Reverse the array
    charArray.reverse();
    // Join the array back into a string
    return charArray.join("");
}

console.log(reverseString("hello")); // Output: olleh
