/**
 *
 * @param {number[]} numbers
 * @returns {number}
 */
export function addUntil100(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  console.log("current number >> ", numbers[0]);
  const sumOfRemainingNumbers = addUntil100(numbers.slice(1, numbers.length));
  console.log("sum of remaining numbers >> ", sumOfRemainingNumbers);
  if (numbers[0] + sumOfRemainingNumbers > 100) {
    return sumOfRemainingNumbers;
  } else {
    return numbers[0] + sumOfRemainingNumbers;
  }
}
