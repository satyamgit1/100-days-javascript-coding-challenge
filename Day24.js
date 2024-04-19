//* Coding Challenge: Find the Mode in an Array
//*•
//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).
function findMode(arr) {
let counts = {};
let maxSum = 0;
let repeatingElement;
for(let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if(counts[element]>maxSum) {
         maxSum = counts[element];
          repeatingElement = element;
         
}
}
console.log(counts);
return repeatingElement;
console.log(`Maximum element occur  ${maxSum} times`);

}

// Example usage:
console.log(findMode([1, 2, 2, 3, 1,1,1,1,1, 4, 21])); // Output: 2
//* Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency).
