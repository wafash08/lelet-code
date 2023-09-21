/**
 *
 * @param {string[]} words
 * @returns {number}
 */
export function uniqueMorseRepresentations(words) {
  const uniqueRepresentations = new Set();
  for (const word of words) {
    let morse = "";
    for (const char of word) {
      morse += MORSE_CODE.get(char);
    }
    uniqueRepresentations.add(morse);
  }
  return uniqueRepresentations.size;
}

const MORSE_CODE = new Map([
  ["a", ".-"],
  ["b", "-..."],
  ["c", "-.-."],
  ["d", "-.."],
  ["e", "."],
  ["f", "..-."],
  ["g", "--."],
  ["h", "...."],
  ["i", ".."],
  ["j", ".---"],
  ["k", "-.-"],
  ["l", ".-.."],
  ["m", "--"],
  ["n", "-."],
  ["o", "---"],
  ["p", ".--."],
  ["q", "--.-"],
  ["r", ".-."],
  ["s", "..."],
  ["t", "-"],
  ["u", "..-"],
  ["v", "...-"],
  ["w", ".--"],
  ["x", "-..-"],
  ["y", "-.--"],
  ["z", "--.."],
]);

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // 2
