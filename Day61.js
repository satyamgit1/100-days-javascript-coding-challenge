//* Question:
//* Write a function isAnagram that takes in two strings and returns true if they are anagrams of each other, 
//* and false otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
//* typically using all the original letters exactly once.

function isAnagram(s1, s2) {
    // Helper function to sort the letters of a string
    function sortString(str) {
        return str.split('').sort().join('');
    }

    // Compare the sorted versions of the strings
    return sortString(s1) === sortString(s2);
}

// Test cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("evil", "vile"));     // true
console.log(isAnagram("fluster", "restful")); // true
console.log(isAnagram("dormitory", "dirtyroom")); // true
console.log(isAnagram("conversation", "voicesranton")); // true
console.log(isAnagram("conversation", "voicesrando")); // false
