// Given an array containing some numbers write a code to that will find out the missing number in the array’s range ?

function findMissingNumber(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    // Iterate through the array to find the missing number
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            return arr[i] + 1;
        }
    }
    
    // If no missing number found, return undefined
    return undefined;
}

// Example usage:
const numbers = [1, 2, 3, 5, 6, 7, 8];
console.log("The missing number is:", findMissingNumber(numbers)); // Output: 4

