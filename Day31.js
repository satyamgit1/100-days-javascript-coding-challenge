//* Coding Challenge: Simple Password Validator
//*
//* Write a function called simplePasswordValidator that takes a single parameter:
//* password: A string representing the password to be validated.
//* The function should validate the password based on the following criteria:
//* - The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//* - The length of the password must be at least 8 characters.
//* The function should return true if the password meets all the criteria, otherwise, it should return false.
//* Input:
//* password: A non-empty string representing the password to be validated.
//* Output:
//* - true if the password meets all the criteria.
//* - false otherwise.
//* Constraints:
//* - The input string password will contain only alphanumeric characters and punctuation marks.

function simplePasswordValidator(password) {
    // Check if password length is at least 8 characters
    if (password.length < 8) {
        return false;
    }

    // Check if password contains at least one lowercase letter, one uppercase letter, and one digit
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    return hasLowercase && hasUppercase && hasDigit;
}

// Example usage:
console.log(simplePasswordValidator("Passw0rd")); // Output: true
console.log(simplePasswordValidator("weak")); // Output: false
