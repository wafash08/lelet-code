/**
 *
 * @param {string} char contains at least one x and in lowercase
 * @returns {number} index of the first found x
 */
export function findX(char) {
  if (char[0] === "x") {
    return 0;
  }
  return findX(char.slice(1, char.length)) + 1;
}
