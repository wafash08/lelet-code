/**
 * @see https://leetcode.com/problems/plus-one/description/
 * @param {number[]} digits
 * @return {number[]}
 *
 */
export function plusOne(digits) {
	// Step
	// Start from the least significant digit (the last element in the array) and move towards the most significant digit (the first element in the array).
	// Increment the least significant digit by 1.
	// If the incremented digit becomes 10, set it to 0 and move to the next digit to the left.
	// Repeat step 3 until you find a digit that does not become 10 after incrementing.
	// If all digits become 10 (which means the original number was 999...9), add a new digit 1 at the beginning of the array.
	// Return the modified array representing the incremented number.
	let l = digits.length - 1;

	let rec = function (p) {
		console.log('p > ', p);
		if (digits[p] < 9) {
			console.log('if gets called > ', digits[p]);
			digits[p] += 1;
			return digits;
		} else {
			digits[p] = 0;
			if (p === 0) {
				digits.unshift(1);
				return digits;
			}
			return rec(p - 1);
		}
	};

	return rec(l);
}
// export function plusOne(digits) {
// 	const digitsJoined = digits.join('');
// kenapa menggunakan BigInt?
// karena di soal dijelaskan bahwa digits dapat mengandung large integer
// sehingga Number saja tidak mencukupi
// 	const digitsPlusOne = BigInt(digitsJoined) + BigInt(1);
// 	return digitsPlusOne.toString().split('');
// }

// console.log(plusOne([9]));
console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9, 9, 9, 9]));

/*
Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/
