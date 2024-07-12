function cyclicSort(nums) {
    let i = 0;
    while (i < nums.length) {
        // Element should be in the position nums[i] - 1
        let correctIndex = nums[i] - 1;
        
        // If the element is not already at its correct position
        if (nums[i] !== nums[correctIndex]) {
            // Swap current element with the element at correctIndex
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }
    return nums;
}

// Example usage:
console.log(cyclicSort([3, 1, 5, 4, 2])); // Output: [1, 2, 3, 4, 5]
console.log(cyclicSort([2, 6, 4, 3, 1, 5])); // Output: [1, 2, 3, 4, 5, 6]
