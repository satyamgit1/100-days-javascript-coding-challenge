/**
 * Coding Challenge: Find the Minimum Value in an Array
 *
 * Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.
 *
 * Constraints:
 * - The input array may contain both positive and negative integers.
 * - The input array may be empty.
 * - The input array may contain duplicate values.
 *
 * Example usage:
 * console.log(findMin([5, 10, 2, 8])); // Output: 2
 * console.log(findMin([5, -3, 0, 12, -71])); // Output: -71
 * console.log(findMin([])); // Output: undefined (or any suitable message for empty array)
 *
 * Note:
 * Ensure the function handles edge cases gracefully, such as an empty input array.
 */

function findMin(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return undefined; // Return undefined for an empty array
    }

    let min = numbers[0]; // Initialize min with the first element of the array

    // Iterate through the array to find the minimum value
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; // Update min if the current element is smaller
        }
    }

    return min; // Return the minimum value found
}

// Example usage:
console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -71])); // Output: -71
console.log(findMin([])); // Output: undefined (or any suitable message for empty array)
