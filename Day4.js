// Function: checkTriangleType
// Description: Determines the type of triangle based on the lengths of its sides.
// Parameters:
//   - side1: Length of the first side of the triangle.
//   - side2: Length of the second side of the triangle.
//   - side3: Length of the third side of the triangle.
// Returns: A string indicating the type of triangle: "equilateral", "isosceles", or "scalene".
const checkTriangleType =(a,b,c)=>{
    if(a===b && b==c && a===c) return "equilateral";
    if(a===b || b==c || a==c) return "isosceles";
    return "scalene";    
}

console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"
