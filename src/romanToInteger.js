/**
 *
 * @param {string} s
 * @returns {number}
 * @see https://stackoverflow.com/questions/49659711/roman-to-integer-in-js-why-it-only-convert-the-first-character
 *
 */

export function romanToInteger(s) {
  let result = 0;
  let previous = 0;
  let current = 0;

  for (const char of s.split("").reverse()) {
    // console.log("result >>> ", result);
    // console.log("char >>> ", char);

    if (isValidRoman(char)) {
      current = getIntegerFromRoman(char);
    } else {
      return 0;
    }
    // console.log("current >>> ", current);

    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }

    previous = current;
    // console.log("previous >>> ", previous);
  }

  return result;
}

const ROMANS = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

/**
 * @param {string} roman
 * @returns {number}
 */
function getIntegerFromRoman(roman) {
  return ROMANS.get(roman.toUpperCase());
}

/**
 * @param {string} str
 * @returns {boolean}
 */
function isValidRoman(str) {
  return ROMANS.has(str);
}

console.log(romanToInteger("XIV"));
