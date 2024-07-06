//* Mean of Array After Removing Some Elements

const arr = [1, 2, 3, 4, 5];
const removeCount = 2;

// Sort the array in ascending order
arr.sort((a, b) => a - b);

// Remove the specified number of elements from both ends of the array
arr.splice(0, removeCount);
arr.splice(-removeCount);

// Calculate the mean of the remaining elements
const sum = arr.reduce((acc, curr) => acc + curr, 0);
const mean = sum / arr.length;

console.log(mean);