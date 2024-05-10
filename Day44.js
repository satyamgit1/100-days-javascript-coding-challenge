//* ## Practice - Email Validation

//* to validate an email, we want to check three main things:

//* 1. **local part**: the part before the 'a symbol.
//* 2. **domain**: the part after the 'a' but before the top-level domain.
//* 3. **top-level domain (tld)**: the last part following the last dot.

//todo 1: The local part of the email address (before the "a") can contain:
//? Alphanumeric characters (A-Z, a-z, 0-9)
//? Special characters: period "'", underscore "-", percent "%", plus "+", or hyphen "_"
// *9/? Consecutive periods are not allowed
//? Special characters cannot appear at the beginning or end of the local part
// *todo 2: The domain part of the email address (after the "a") can contain:
// Alphanumeric characters (A-Z, a-z, 0-9)
// Hyphen "_"
// Period ". "
// Must contain at least one period
// The top-level domain (TLD) must consist of at least two alphabetic ch
// Ce.g., "com", "org","net", etc.)
//* (?)Non-capturing groups are used when you need the grouping functionality (e.g., applying quantifiers to multiple characters or alternatives) but do not need to capture the data within the

const validateEmail= (email) => {
    return /[a-zA-Z0-9]+(?:[.%_+][a-zA-Z0-9]+)*@[A-Za-z]+\.[A-Za-z]{2,}$/.test(email);
}

console. log(validateEmail ("john.doe@example.com" )); // true
console.log(validateEmail("invalid..dotadomain.com")); // false 
console.log(validateEmail("missingadotcom" )); // false 
console.log(validateEmail("no@domain" )); //


