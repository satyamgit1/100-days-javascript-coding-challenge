// Challenge: Calculate the Average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should:
// 1. Accept an array of numbers as input.
// 2. Calculate the sum of all the numbers in the array.
// 3. Divide the sum by the total number of elements in the array to find the average.
// 4. Return the calculated average.

// Function to calculate the average
const calculateAverage = (numbers) => {
    // Check if the input array is empty
    if (numbers.length === 0) {
        return 0; // If empty, return 0 to avoid division by zero
    }
    
    let sum = 0;
    // Loop through the array to calculate the sum of all numbers
    for (let i = 0; i < numbers.length; i++) {
        sum = sum +  numbers[i];
    }
    
    // Calculate the average by dividing the sum by the total number of elements
    const average = sum / numbers.length;
    return average;
};

// Example usage
const numbers = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers)); // Output: 30
