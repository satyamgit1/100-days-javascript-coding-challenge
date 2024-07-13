//* Write a JavaScript function that takes an array of integers and returns the array of the squares of each number, but sorted in non-decreasing order.

//* For example, given the array [-4, -1, 0, 3, 10], your function should return [0, 1, 9, 16, 100].

//* Requirements:

//* The function should handle both positive and negative numbers.
// *The input array may not be sorted.
//* Do not use the Array's sort() method directly on the result array after squaring the elements.
// *Bonus Challenge: Try to achieve this with a time complexity better than O(n log n).

function sortedSquares(nums) {
	let result = new Array(nums.length);
	let left = 0;
	let right = nums.length - 1;
	let position = nums.length - 1;

	while (left <= right) {
		if (Math.abs(nums[left]) > Math.abs(nums[right])) {
			result[position] = nums[left] * nums[left];
			left++;
		} else {
			result[position] = nums[right] * nums[right];
			right--;
		}
		position--;
	}

	return result;
}

// Example usage
console.log(sortedSquares([-4, -1, 0, 3, 10])); // Output: [0, 1, 9, 16, 100]

