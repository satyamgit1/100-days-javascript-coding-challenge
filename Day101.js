//* Implement a function to check if a given array of integers represents a valid mountain array.

// A valid mountain array must follow these rules:

// arr.length >= 3
// There exists some index i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// mountainArray.js

function isValidMountainArray(arr) {
    const n = arr.length;
    if (n < 3) return false;

    let i = 0;

    // Walk up
    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    // Peak can't be first or last
    if (i === 0 || i === n - 1) return false;

    // Walk down
    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === n - 1;
}

// Example usage
const arr1 = [2, 1];
const arr2 = [3, 5, 5];
const arr3 = [0, 3, 2, 1];

console.log(isValidMountainArray(arr1)); // Output: false
console.log(isValidMountainArray(arr2)); // Output: false
console.log(isValidMountainArray(arr3)); // Output: true
