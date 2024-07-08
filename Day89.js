// *Write a JavaScript function that takes an array of objects as an input and returns a new array with only the objects that have a specific property.
function filterObjectsByProperty(arr, property) {
    return arr.filter(obj => obj.hasOwnProperty(property));
}

// Example usage
const inputArray = [
    { name: 'John', age: 25 },
    { name: 'Jane', city: 'New York' },
    { name: 'Bob', age: 30, city: 'London' },
    { name: 'Alice' }
];

const filteredArray = filterObjectsByProperty(inputArray, 'city');
console.log(filteredArray);