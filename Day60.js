//* Write a function flattenArray that takes a nested 
// array (an array that contains arrays) and returns a 
// new array with all the elements from the nested arrays
//  flattened into a single array. 
//  The function should be able to handle arrays nested to any depth.

function flattenArray(arr) {
    let stack = [...arr];
    let result = [];
  
    while (stack.length) {
      let next = stack.shift(); // Get the first element from the stack
  
      if (Array.isArray(next)) {
        stack.unshift(...next); // Push all elements of the nested array to the front of the stack
      } else {
        result.push(next);
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
  console.log(flattenArray([[1, 2, [3]], 4])); // Output: [1, 2, 3, 4]
  console.log(flattenArray([1, [2], [3, [4, [5]]]])); // Output: [1, 2, 3, 4, 5]
  
  
