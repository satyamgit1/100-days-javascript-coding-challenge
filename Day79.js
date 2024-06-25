function findNumbersWithEvenNumberOfDigits(nums) {
    // Filter the array to only include numbers with an even number of digits
    return nums.filter(num => num.toString().length % 2 === 0);
}

// Example usage
const nums = [12, 345, 2, 6, 7896];
const evenDigitNumbers = findNumbersWithEvenNumberOfDigits(nums);
console.log(evenDigitNumbers); // Output: [12, 7896]