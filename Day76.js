//* Kth Distinct String in an Array
// Easy
// 22
// 42.9% Acceptance
// In this lab, you will be implementing a function to find the Kth distinct string in an array. A distinct string is a string that is present only once in an array.

// You will be given an array of strings arr, and an integer k, and your task is to return the kth distinct string present in arr. If there are fewer than k distinct strings, your function should return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

// For example:

// kthDistinct(["d", "b", "c", "b", "c", "a"], 2); // Output: "a"
// kthDistinct(["aaa", "aa", "a"], 1); // Output: "aaa"
// kthDistinct(["a", "b", "a"], 3); // Output: ""

function kthDistinct(arr, k) {
    let count = {};
    
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            count[arr[i]]++;
        } else {
            count[arr[i]] = 1;
        }
    }
    
    let distinctStrings = Object.keys(count).filter(key => count[key] === 1);
    
    if (k <= distinctStrings.length) {
        return distinctStrings[k - 1];
    } else {
        return "";
    }
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)); // Output: "a"
console.log(kthDistinct(["aaa", "aa", "a"], 1)); // Output: "aaa"
console.log(kthDistinct(["a", "b", "a"], 3)); // Output: ""