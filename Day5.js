// Programming Question: Sort an Array

// Write a function to sort an array of numbers in ascending order.

// Example usage:



const sortAscending =(arr) => {
    return arr.sort((a, b) => a-b);

}





console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8, 10]

// Requirements:
// - The function should take an array of numbers as input.
// - It should return a new array with the numbers sorted in ascending order.
// - The original array should remain unchanged.
// - You are not allowed to use the built-in sort method.
