function isBoomerang(point1, point2, point3) {
    // Deconstruct points
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    const [x3, y3] = point3;
    
    // Check if points are not collinear
    return (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) !== 0;
}

// Example usage:
const pointA = [0, 0];
const pointB = [1, 1];
const pointC = [2, 2];

console.log(isBoomerang(pointA, pointB, pointC)); // Output: false (points are collinear)

const pointD = [0, 0];
const pointE = [1, 2];
const pointF = [3, 1];

console.log(isBoomerang(pointD, pointE, pointF)); // Output: true (points are not collinear)
