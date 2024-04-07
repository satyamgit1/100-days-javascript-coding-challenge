// 12: Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.


// 1st method to remove duplicates



const removeDuplicates =(arr)=>{
    return [...new Set(arr)]
}

// 2nd method to remove duplicates

const removeDuplicatesInPlace = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length;) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1); // Remove the duplicate element j = which element and 1 = how many elements to remove
            } else {
                j++; // Move to the next element
            }
        }
    }
    return arr;
}


// Example usage:
console.log(removeDuplicates([1, 2, 3, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates([])); // Output: []
console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); // Output: [5, 6, 7, 8, 9]

// Constraints:
// - The input array may contain both positive and negative integers.
// - The input array may be empty.
// - The output array should retain the original order of elements.
