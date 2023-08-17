/**
 *
 * @param {string[]} strings
 * @returns {string}
 */

export function findDuplicate(strings) {
  let duplicate = "";
  let stringTable = {};

  for (const letter of strings) {
    if (!stringTable[letter]) {
      stringTable[letter] = true;
    } else {
      duplicate = letter;
      break;
    }
  }

  return duplicate;
}
