//! write a Javascript tunction tinamedlan(arr) that takes an array or numpers as input ana returns the median value. If the array has an even number of elements, return the average of the two middle values.
//? For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle

// todo Tips
//? Sort the array in ascending order.
//? If the array has an odd number of elements, the median is the middle element.
//? If the array has an even number of elements, the median is the average of the two middle elements.




const findMedian = (arr) => {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    // Step 2: Check if the array length is odd or even
    const length = arr.length;
    const middleIndex = Math.floor(length / 2);

    // Step 3: for even length array
    if (length % 2 === 0) {
        // Step 4: for even length array
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
        // Step 5: for odd length array
        return arr[middleIndex];
    }
}

console.log(findMedian([15, 3, 9, 1, 71])); // Output: 9
console.log(findMedian([2, 4, 6, 81])); // Output: 5
console.log(findMedian([1, 3, 5, 7, 9, 11])); // Output: 6



// Step 1: Sort the array
// Step 2: Check if the array length is odd or even
// Step 3 for even length array
// Step 4 for odd length array