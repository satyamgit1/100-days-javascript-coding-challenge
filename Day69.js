//* Given two arrays of numbers (define arrays), find all the numbers that occur in both the first and the second arrays. Print them in ascending order.
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const commonNumbers = array1.filter(num => array2.includes(num)).sort((a, b) => a - b);

console.log(commonNumbers);