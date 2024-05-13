//* Write a JavaScript function that takes an unsorted array of integers as input and returns a new array containing the same numbers but sorted in ascending order. You can choose any sorting algorithm you're familiar with (e.g., bubble sort, selection sort, insertion sort, merge sort, quick sort).

function insertionSort(arr, order = 'asc') {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
  
      while (j >= 0 && compare(current, arr[j], order) < 0) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
  function compare(a, b, order) {
    if (order === 'asc') {
      return a - b;
    } else if (order === 'desc') {
      return b - a;
    } else {
      throw new Error('Invalid sorting order. Must be "asc" or "desc".');
    }
  }
  
  // Example usage
  const unsortedArray = [5, 2, 8, 1, 3];
  const sortedAsc = insertionSort(unsortedArray);
  console.log(sortedAsc); // Output: [1, 2, 3, 5, 8]
  
  const sortedDesc = insertionSort(unsortedArray.slice(), 'desc');
  console.log(sortedDesc); // Output: [8, 5, 3, 2, 1]
  