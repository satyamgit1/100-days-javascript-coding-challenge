//* Programming Challenge: Calculate Age from birthDate
//*-
//? Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthDate will be provided in the format
// "YYYY-MM-DD".
//* Requirements:
//? The function must handle leap years and varying numbers of days in each month accurately.
//? Consider the timezone difference and ensure the age is calculated based on the current date in your local time zone.
// I? The output should be the age in whole vears.

// 1. currentDate()
// 2. currentDate.year & birthdate.year();
// 3: age = curYear - BirthYear → 34
// 4: month of each
// 5: 2024 = 34 tab jan wo 2024-05-03
// step 1
const calculateAge = (birthDate) => {
    let todayDate = new Date();
    birthDate = new Date(birthDate);

    // Calculate age
    let age = todayDate.getFullYear() - birthDate.getFullYear();
    
    // Step 3: Adjust age based on months and days
    const monthDiff = todayDate.getMonth() - birthDate.getMonth(); // If the month difference is zero, then it's the same month.

    if (monthDiff < 0 || (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
};

console.log(calculateAge("1990-05-15")); // month starts from 0 to 11, so 5 is June, not May
