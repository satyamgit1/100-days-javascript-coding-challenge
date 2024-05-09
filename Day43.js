//* Programming Challenge: FizzBuzz Challenge
// *
//? Write a function fizzbuzz that accepts two numbers, startNum and endNum, as input. The function should return an array containing numbers and specific strings based on the following rules:
//? For each number i in the range from startNum to endNum (both inclusive):
//? If i is divisible by both 3 and 5, include "FizzBuzz" in the result.
//? If i is divisible by only 3, include "Fizz" in the result.
//? If i is divisible by only 5, include "Buzz" in the result.
//? Otherwise, include the number i itself.
const fizzbuzz = (sNum,eNum) => {
const arr = [];
for (let i = sNum; i <= eNum; i++) {
  // Check for divisibility by 3 and 5 together first
  if (i % 15 === 0) {
    arr.push("FizzBuzz");
  } else if (i % 3 === 0) {
    arr.push("Fizz");
  } else if (i % 5 === 0) {
    arr.push("Buzz");
  } else {
    arr.push(i.toString());
  }
}
return arr;
}



// Example 1
console. log(fizzbuzz(1, 15));
//* Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13,

// Example 2
console. log(fizzbuzz (12, 20));
//* Output: ["Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]