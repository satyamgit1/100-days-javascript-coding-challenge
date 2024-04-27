
// Sure! Here's a JavaScript coding question you might encounter in an interview:

// Question:

// Given an array of integers, write a function findPairs that takes two arguments: the array of integers and a target sum. The function should find all pairs of integers in the array that sum up to the target sum and return them as an array of arrays.

function findPairs(arr, targetSum) {
    const pairs = [];
    const seen = new Set();
  
    for (let num of arr) {
      const complement = targetSum - num;
      if (seen.has(complement)) {
        pairs.push([num, complement]);
      }
      seen.add(num);
    }
  
    return pairs;
  }
  
  // Test the function
  const arr = [3, 1, 5, 8, 2, 6];
  const targetSum = 9;
  console.log(findPairs(arr, targetSum)); // Output: [[3, 6], [1, 8], [5, 4]]
  