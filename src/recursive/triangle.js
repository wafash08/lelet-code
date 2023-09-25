/**
 *
 * @param {number} number
 * @returns {number}
 */
export function triangle(number) {
  if (number === 1) {
    return 1;
  } else {
    return number + triangle(number - 1);
  }
}
