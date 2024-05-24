function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
  
    return sum - arrSum;
  }
  
  console.log(findMissingNumber([1, 2, 3, 5]));
  // Output: 4