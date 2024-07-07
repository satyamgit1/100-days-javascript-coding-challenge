//* Count Common Words Occurring Once in Two Arrays
const countCommonWords = (arr1, arr2) => {
    const wordCount = {};
    
    // Count words in arr1
    for (let word of arr1) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    // Count words in arr2 and filter common words occurring once
    const commonWords = arr2.filter(word => {
        if (wordCount[word] === 1) {
            delete wordCount[word];
            return true;
        }
        return false;
    });
    
    return commonWords.length;
};

// Example usage
const array1 = ['apple', 'banana', 'orange', 'apple'];
const array2 = ['apple', 'banana', 'grape', 'orange'];

const commonWordCount = countCommonWords(array1, array2);
console.log(commonWordCount); // Output: 2

