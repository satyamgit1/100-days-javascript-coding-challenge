// 13: Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase).


const countVowels = (str)=>{
let vowels = ["a", "e", "i", "o", "u"];
let arr = str.split("");
// console.log(arr);
let count =0;
for(let char of arr){
    if(vowels.includes(char.toLowerCase())){
        count++;
    } 
}
return count;
}



// Example usage:
console.log(countVowels("Helloo world")); // Output: 4
console.log(countVowels("ThE quIck brOwn fOx")); // Output: 5
console.log(countVowels("Brrrp")); // Output: 0

// Constraints:
// The input string may contain letters in both uppercase and lowercase.
// The output should be a non-negative integer representing the count of vowels in the input string.
