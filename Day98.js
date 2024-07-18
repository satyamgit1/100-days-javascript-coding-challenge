//* Given an aof, find product yielded from three of the integers


function findLargestProduct(arr) {
    if (arr.length < 3) {
        return "Array should have at least 3 integers";
    }

    arr.sort((a, b) => a - b); // Sort the array in ascending order

    const n = arr.length;
    const product1 = arr[n - 1] * arr[n - 2] * arr[n - 3]; // Product of the three largest integers
    const product2 = arr[0] * arr[1] * arr[n - 1]; // Product of the two smallest integers and the largest integer

    return Math.max(product1, product2);
}

const numbers = [1, 2, 3, 4, 5];
const largestProduct = findLargestProduct(numbers);
console.log(largestProduct); // Output: 60
