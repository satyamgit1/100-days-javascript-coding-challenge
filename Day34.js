//* Programming Challenge: Remove Duplicates from an Array

//? Write a function removeDuplicates that takes an array of elements as input and returns a new array with duplicate elements removed.
//? Your task is to implement the removeDuplicates function using JavaScript and ensure that the returned array contains only unique elements from the input array.
//? The order of elements in the output array should be the same as the original array, with the first occurrence of each unique element preserved.
// First Method: RemoveDuplicates
// const removeDuplicates = (arr) => {
//  let duplicate = new Set(arr);
//  return duplicate;

// };
// Second Method: RemoveDuplicates

// function removeDuplicates(arr) {
//   let uniqueArray = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(uniqueArray.indexOf(arr[i])  === -1){ // -1 not element found
//         uniqueArray.push(arr[i]);
//     }
    
//   }
//   return uniqueArray;
// }
//Third Method: RemoveDuplicates

const removeDuplicates = (arr) => {
    return arr.filter((value,index) => arr.indexOf(value) === index);
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 6]));
console.log(removeDuplicates(["a", "b", "c", "d", "a"]));
