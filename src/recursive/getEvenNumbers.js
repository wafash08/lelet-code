// todo
// ubah menjadi recursive
/**
 *
 * @param {number[]} numbers
 * @returns {number[]} new array containing even numbers
 */
export function getEvenNumbers(numbers) {
  let evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evens.push(number);
      continue;
    }
  }

  return evens;
}
