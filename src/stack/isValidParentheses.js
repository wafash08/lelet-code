import { Stack } from "./stack";

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isValidParentheses(str) {
  const stack = new Stack();
  // iterasi tiap karakter string
  for (const char of str) {
    // jika karakter merupakan kurung buka
    if (isOpeningBrace(char)) {
      // simpan ke dalam stack
      stack.push(char);
    } else if (isClosingBrace(char)) {
      const poppedOpeningBrace = stack.pop();

      if (!poppedOpeningBrace) {
        return false;
      }

      if (isNotAMatch(poppedOpeningBrace, char)) {
        return false;
      }
    }
  }

  // kalau ada isi di dalam stack, itu berarti ada opening bracket yang tidak ditutup
  if (stack.read()) {
    return false;
  }

  return true;
}

/**
 *
 * @param {string} char
 * @returns {boolean}
 */
function isOpeningBrace(char) {
  return ["(", "{", "["].includes(char);
}

/**
 *
 * @param {string} char
 * @returns {boolean}
 */
function isClosingBrace(char) {
  return [")", "}", "]"].includes(char);
}

/**
 *
 * @param {string} openingBrace
 * @param {string} closingBrace
 * @returns {boolean}
 */
function isNotAMatch(openingBrace, closingBrace) {
  const parentheses = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  return closingBrace !== parentheses.get(openingBrace);
}

const isValid = isValidParentheses("abcd");
console.log("ora valid >> ", isValid);
