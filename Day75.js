//* Question: Balanced Brackets
// Write a function isBalanced(str) that takes a string str containing only parentheses ()
//  and curly braces {}. 
//  The function should return true if every opening parenthesis has a corresponding closing parenthesis in the correct order,
//   and every opening curly brace has a corresponding closing curly brace in the correct order. Otherwise, it should return false.
function isBalanced(str) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
    };

    for (let char of str) {
        if (char === '(' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === '}') {
            if (stack.length === 0) {
                return false; // More closing brackets than opening brackets
            }
            let last = stack.pop();
            if (pairs[last] !== char) {
                return false; // Mismatched brackets
            }
        }
    }

    return stack.length === 0; // Ensure all opened brackets are closed
}

// Test cases
console.log(isBalanced("(){}"));      // true
console.log(isBalanced("({})"));      // true
console.log(isBalanced("({}[])"));    // true
console.log(isBalanced("({)}"));      // false
console.log(isBalanced("{[}]"));      // false
console.log(isBalanced("(){}{}()"));  // true
console.log(isBalanced("(){}{}()(")); // false
