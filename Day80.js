//* Find Closest Number to Zero in an Array
function findClosestToZero(arr) {
    if (arr.length === 0) {
        return null; // or handle empty array case as per your requirement
    }

    let closest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i]) < Math.abs(closest)) {
            closest = arr[i];
        } else if (Math.abs(arr[i]) === Math.abs(closest)) {
            closest = Math.max(closest, arr[i]);
        }
    }

    return closest;
}

// Example usage
const numbers = [5, -2, 9, -7, 3];
const closestNumber = findClosestToZero(numbers);
console.log(closestNumber); // Output: -2