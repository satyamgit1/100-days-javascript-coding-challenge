function mergeSort(arr) {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort each half
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare the elements of both halves and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements (one of the halves may have elements left)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Test the function
  const array = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(array);
  console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
  