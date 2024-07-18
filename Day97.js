//*  Write a code to implement higher-order function

// Higher-order function in JavaScript is a function that either takes one or more functions as arguments or returns a function as its result. In other words, it operates on functions, either by taking them as arguments, returning them, or both
function operationOnArray(arr, operation) {
    let result = [];
    for (let element of arr) {
      result.push(operation(element));
    }
    return result;
  }
  
  function double(x) {
    return x * 2;
  }
  
  let numbers = [1, 2, 3, 4];
  let doubledNumbers = operationOnArray(numbers, double);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8]