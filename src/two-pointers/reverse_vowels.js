/**
 *
 * @param {string} s
 * @returns {string}
 */
export function reverse_vowels(s) {
  let left = 0;
  let right = s.length - 1;
  s = s.split("");
  while (left < right) {
    if (isVowel(s[left])) {
      if (isVowel(s[right])) {
        swap(s, left, right);
        left++;
        right--;
      } else {
        right--;
      }
    } else {
      left++;
    }
  }
  return s.join("");
}

const VOWELS_SET = new Set(["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"]);
/**
 *
 * @param {string} char
 * @returns {boolean}
 */
function isVowel(char) {
  return VOWELS_SET.has(char);
}
/**
 *
 * @param {string[]} elements
 * @param {number} a
 * @param {number} b
 */
function swap(elements, a, b) {
  [elements[a], elements[b]] = [elements[b], elements[a]];
}
