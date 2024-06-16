//* Write a JavaScript function that takes two arrays (arr1 and arr2) 
//* and returns a new array containing the elements from both arrays, but without duplicates.
function combineUnique(arr1, arr2) {
    const combined = arr1.concat(arr2);
    const unique = [];
    for (let i = 0; i < combined.length; i++) {
        if (!unique.includes(combined[i])) {
            unique.push(combined[i]);
        }
    }
    return unique;
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
console.log(combineUnique(arr1, arr2));
