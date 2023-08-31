/**
 *
 * @param {string} str
 * @returns {string}
 *
 */

export function findMissingLetter(str) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  // if the str contains all the alphabet then return empty string
  if (str.toLowerCase() === ALPHABET) {
    return "";
  }

  let letterTable = {};

  for (const letter of str) {
    letterTable[letter.toLowerCase()] = true;
  }

  for (const letter of ALPHABET) {
    if (!letterTable[letter.toLowerCase()]) {
      console.log("missing letter", letter);
      return letter;
    }
  }
}
