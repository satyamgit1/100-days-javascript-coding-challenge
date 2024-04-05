// Day10 > Js index.js

// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input
// and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise.

// Example usage:
console.log(arraysAreEqual([1, 2, 31], [1, 2, 31])); // Output: true
console.log(arraysAreEqual([1, 2, 31], [1, 2, 41])); // Output: false
console.log(arraysAreEqual([], [])); // Output: true

// Function definition
function arraysAreEqual(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Compare each element of the arrays
    for (let i = 0; i < arr1.length; i++) {
        // If any elements are not equal, return false
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If all elements are equal, return true
    return true;
}
