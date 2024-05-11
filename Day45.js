//? Create a function validatePassword that checks if a given password string meets the following criteria:
//? Minimum Length: The password must be at least & characters long.
//? Case Requirements: The password must include at least one uppercase letter and at least one lowercase letter.
//? Numerical Requirement: The password must contain at least one digit.
//? Special Character Requirement: The password must have at least one special character from the set !a#$%^g*()-_+=.
//* Requirements


// ^: Start of the string.
// (?=.*[a-z]): At least one lowercase letter.
// (?=.*[A-Z]): At least one uppercase letter.
// (?=.*\d): At least one digit.
// (?=.*[@$!%*?&]): At least one special character from the specified set.
// [A-Za-z\d@$!%*?&]{8,}: Match characters from the specified set (letters, digits, and special characters) with a minimum length of 8.
// $: End of the string.

const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}
console.log(validatePassword("Abcd123@")); // Output: true
console.log(validatePassword("weakpassword")); // Output: false


//? The function should return true if the password meets all the criteria, and fa
//? You are to implement this function using JavaScript.