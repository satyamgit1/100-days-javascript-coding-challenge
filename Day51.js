function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  
  console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));
  // Output: 'quick'