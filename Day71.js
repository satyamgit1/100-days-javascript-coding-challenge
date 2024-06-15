
//* generates the Fibonacci series up to a specified number and calculates their sum:
function fibonacciSeries(n) {
    let fibSeries = [0, 1];
    let sum = 1; // Sum starts with 1 because the series starts with 0, 1

    for (let i = 2; i <= n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
        sum += fibSeries[i];
    }

    return { series: fibSeries, sum: sum };
}

// Example usage:
const n = 10; // Change this number to generate Fibonacci series up to n
const result = fibonacciSeries(n);

console.log(`Fibonacci Series up to ${n}:`);
console.log(result.series);
console.log(`Sum of Fibonacci Series up to ${n}: ${result.sum}`);
