// ounts the occurrences of each element in an array

function countOccurrences(numbers) {
    const counts = {}; // Create an empty object to store the counts of each element
    
    // Iterate through each number in the array
    for (let element of numbers) {
      counts[element] = (counts[element] || 0) + 1;
    }
    // counts[1] = 1;
    // counts[2] = 1+counts[2]; = 2
    
  
    // Return the counts object containing the counts of each element
    return counts;
  }
  
  const numbers = [1, 2, 2, 3, 1, 4, 2];
  console.log(countOccurrences(numbers));
  