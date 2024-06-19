// * Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    let equal = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }

    return quickSort(left).concat(equal).concat(quickSort(right));
}

// Example usage:
let array = [34, 7, 23, 32, 5, 62];
console.log(quickSort(array)); // Output: [5, 7, 23, 32, 34, 62]
