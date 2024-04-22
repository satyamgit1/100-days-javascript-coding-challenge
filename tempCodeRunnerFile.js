const repeatString = (str,num) =>{
return  num > 0 ? str.repeat(num): str;
}
console.log(repeatString("abc", 5)); // Output: "abcabcabcabcabc"