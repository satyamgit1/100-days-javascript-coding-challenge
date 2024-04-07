// 11: Write a function that takes a number as input and returns the sum of its digits.





const sumOfDigits = (num) =>{
    let sum = 0;
    while(num!=0)
    {
     let digit = num%10;
     sum = sum + digit;
     num = Math.floor(num /10);
    }
    return sum;
}



// Example usage:
console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(4321)); // Output: 10
console.log(sumOfDigits(123456)); // Output: 21

// Constraints:
// - The input number will always be a positive integer.
// - The input number can have multiple digits.
// - The output should be the sum of all the digits in the input number.

// Homework:
// This function calculates the sum of digits without converting the number to a string.
