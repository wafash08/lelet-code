/**
 *
 * @param {string[]} str
 * @returns {number}
 */
export function getTotalCharacters(str) {
  if (str.length === 0) {
    return 0;
  }
  console.log("string >> ", str);
  return str[0].length + getTotalCharacters(str.slice(1, str.length));
}
