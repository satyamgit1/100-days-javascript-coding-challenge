//* Find Closest Number to Zero in an Array


// In this lab, you will write a function that finds the number closest to zero in an integer array. The function should return the number with the highest value if there are multiple answers. The lab provides various test cases to validate your implementation.

function findClosestToZero(numbers) {
    let closest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (Math.abs(numbers[i]) < Math.abs(closest) || (Math.abs(numbers[i]) === Math.abs(closest) && numbers[i] > closest)) {
            closest = numbers[i];
        }
    }
    return closest;
}
console.log(findClosestToZero([4, -2, 1, 4, 8])); // Output: 1