// *Implement a function that merges two arrays into a single array, alternating elements from each array.

function mergeArrays(array1, array2) { 

    const mergedArray = []; 
  
    const maxLength = Math.max(array1.length, array2.length); 
  
    for (let i = 0; i < maxLength; i++) { 
  
      if (i < array1.length) mergedArray.push(array1[i]); 
  
      if (i < array2.length) mergedArray.push(array2[i]); 
  
    } 
  
    return mergedArray; 
  
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(mergeArrays(array1, array2));
