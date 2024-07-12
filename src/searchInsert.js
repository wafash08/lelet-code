/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		let valueAtMiddle = nums[middle];

		if (target === valueAtMiddle) {
			return middle;
		} else if (target < valueAtMiddle) {
			right = middle - 1;
		} else if (target > valueAtMiddle) {
			left = middle + 1;
		}
	}

	return left;
};

// Input:
let nums = [1, 3, 5, 6];
let target = 5;
// Output: 2
console.log(searchInsert(nums, target));

// Input:
nums = [1, 3, 5, 6];
target = 2;
// Output: 1
console.log(searchInsert(nums, target));

// Input:
nums = [1, 3, 5, 6];
target = 7;
// Output: 4
console.log(searchInsert(nums, target));
