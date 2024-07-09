//* Write a JavaScript function that takes a string as an input and returns the string with all vowels replaced with a specific character.
function replaceVowels(str, char) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let c = str[i].toLowerCase();
      if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        result += char;
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  // Example usage:
  const input = "hello world";
  const output = replaceVowels(input, "*"); 
  // Output: "h*ll* w*rld"
  console.log(output);