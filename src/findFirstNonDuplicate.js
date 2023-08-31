/**
 *
 * @param { string } str
 * @returns { string }
 *
 */

export function findFirstNonDuplicate(str) {
  let letterTable = {};

  for (const letter of str) {
    if (letterTable[letter]) {
      letterTable[letter] += 1;
    } else {
      letterTable[letter] = 1;
    }
  }

  console.log(letterTable);
  for (const letter of str) {
    if (letterTable[letter] === 1) {
      return letter;
    }
  }
}

console.log(findFirstNonDuplicate("aabbcdde"));
