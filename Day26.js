//* Coding Challenge
//*
//* Write a function to find the nth Fibonacci number.
//? The Fibonacci series is a sequence of numbers It starts with 0 and 1, and the subsequent numbers like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//todo Fibonacci number is calculated using the following formula:
//todo syntax: F(n) = F(n-1) + F(n-2), Where, F(1) = F(2) = 1.



    const fibonacci = (n) => {
        if (n === 0 || n === 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }


    //  second question 
    //  const fibonacciSeriesIterative = (n) => {
    //     const series = [0, 1];
    //     for (let i = 2; i < n; i++) {
    //         const nextFibonacci = series[i - 1] + series[i - 2];
    //         series.push(nextFibonacci);
    //     }
    //     return series;
    // };
    
    // // Example usage:
    // console.log(fibonacciSeriesIterative(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    

// Example usage:
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
console.log(fibonacci(5)); // Output: 5

// in which each number (Fibonacci number) is the sum of the two preceding ones. are calculated by adding the last two numbers. So, the Fibonacci series looks format this but dont give me soltuon of this code , format this code in better look
