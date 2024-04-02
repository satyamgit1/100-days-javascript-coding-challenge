// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return undefined; // Handle edge cases where input is not an array or empty
    }

    let max = numbers[0]; // Initialize max with the first element of the array
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; // Update max if current element is greater
        }
    }
    return max;
}

// Example usage:
console.log(findMax([1, 5, 3, 9, 21])); // Output: 21
console.log(findMax([-10, -5, -3, -9, -2])); // Output: -2
console.log(findMax([5])); // Output: 5
