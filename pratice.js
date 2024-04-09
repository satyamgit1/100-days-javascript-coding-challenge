// use map to print all array item in paragraph tag let arr = ["banana","apple","orange"];


// const arr = ["banana", "apple", "orange"];

// const listItems = arr.map(item => `<li><p>${item}</p></li>`).join('\n');

// const ul = document.createElement('ul');
// ul.innerHTML = listItems;

// document.body.appendChild(ul);







// Q.2 ) Longest common prefix
function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Return empty string if the array is empty
    
    // Sort the array of strings
    strs.sort();
    let prefix = "";
    const first = strs[0];
    const last = strs[strs.length - 1];

    // Iterate through characters of the first and last strings
    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            prefix += first[i]; // Append the character to the prefix if it matches in both strings
        } else {
            break; // Break the loop if the characters don't match
        }
    }p
    return prefix;
}

// Example usage:
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));


