// Merge Sort function
function mergeSort(arr) {
    // If the array has less than two elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle point of the array to divide it into two halves
    const mid = Math.floor(arr.length / 2);

    // Recursively divide the array into two halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the two sorted halves
    return merge(left, right);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare the elements of both arrays and push the smaller element to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++; // Move to the next element in the left array
        } else {
            result.push(right[rightIndex]);
            rightIndex++; // Move to the next element in the right array
        }
    }

    // If there are remaining elements in the left array, add them to the result
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // If there are remaining elements in the right array, add them to the result
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    // Return the merged and sorted array
    return result;
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
