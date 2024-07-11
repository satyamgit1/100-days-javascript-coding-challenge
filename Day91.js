//* Sort People by Height

//* In this lab, you are tasked to implement a function called sortPeople that sorts an array of names based on their corresponding heights in descending order. The function accepts two input arrays, one for the names and another for the corresponding heights of the individuals. The arrays are guaranteed to have distinct heights for each person.

// You need to use ESM import/export everywhere.

// Function signature:

// /**
//  * @param {string[]} names
//  * @param {number[]} heights
//  * @return {string[]}
//  */
// var sortPeople = function(names, heights) {
    
// };
// Examples:

// Example 1:

// sortPeople(["Mary","John","Emma"], [180,165,170])
// // Output: ["Mary","Emma","John"]
// // Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// sortPeople(["Alice","Bob","Bob"], [155,185,150])
// // Output: ["Bob","Alice","Bob"]
// // Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

var sortPeople = function(names, heights) {
    // Create an array of indices [0, 1, 2, ..., n-1]
    let indices = names.map((_, index) => index);

    // Sort indices based on corresponding heights in descending order
    indices.sort((a, b) => heights[b] - heights[a]);

    // Return the names sorted by the sorted indices
    return indices.map(index => names[index]);
};

// Example 1
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
// Output: ["Mary", "Emma", "John"]

// Example 2
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
// Output: ["Bob", "Alice", "Bob"]