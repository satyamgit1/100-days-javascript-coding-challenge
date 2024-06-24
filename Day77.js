// Average Salary Excluding Minimum and Maximum
// Easy
// 15
// 69.3% Acceptance
// In this lab, you will be implementing a function to calculate the average salary of employees excluding the minimum and maximum salary. You are given an array of unique integers salary where salary[i] is the salary of the ith employee. Your task is to return the average salary of employees excluding the minimum and maximum salary. The answers within 10-5 of the actual answer will be accepted.
function averageSalary(salary) {
    // Sort the salary array in ascending order
    salary.sort((a, b) => a - b);

    // Remove the minimum and maximum salary from the array
    salary.splice(0, 1);
    salary.splice(-1, 1);

    // Calculate the sum of the remaining salaries
    let sum = salary.reduce((acc, curr) => acc + curr, 0);

    // Calculate the average salary
    let average = sum / salary.length;

    return average;
}

// Example usage
let salaries = [1000, 2000, 3000, 4000, 5000];
console.log(averageSalary(salaries)); // Output: 3000