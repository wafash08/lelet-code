/**
 * @param {number} x
 * @return {number}
 */
export function mySqrt(x) {
	let left = 0;
	let right = x;
	let result = 0;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);

		if (middle * middle > x) {
			right = middle - 1;
		} else {
			result = middle;
			left = middle + 1;
		}
	}

	return result;
}

console.log(mySqrt(16)); // expected output: 4
console.log(mySqrt(9)); // expected output: 3
console.log(mySqrt(8)); // expected output: 2
