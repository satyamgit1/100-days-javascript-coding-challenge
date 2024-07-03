//* How Many Numbers Are Smaller Than the Current Number
const smallerNumbersCount = (nums) => {
    const sortedNums = [...nums].sort((a, b) => a - b);
    const countMap = new Map();
    
    for (let i = 0; i < sortedNums.length; i++) {
        if (!countMap.has(sortedNums[i])) {
            countMap.set(sortedNums[i], i);
        }
    }
    
    return nums.map((num) => countMap.get(num));
};

// Example usage
const nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersCount(nums)); // Output: [4, 0, 1, 1, 3]