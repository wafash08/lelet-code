/**
 *
 * @param {number} x
 * @returns {boolean}
 * @see "https://dev.to/acupoftee/leetcode-palindrome-number-w-fun-javascript-mathematical-approach-1obi"
 *
 */

export function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let reversedX = 0;
  // copy of x so that the true x is not affected
  let xCopy = x;

  while (xCopy > 0) {
    // get the last digit of xCopy
    let lastDigit = xCopy % 10;
    console.log("lastDigit >>> ", lastDigit);

    reversedX = reversedX * 10 + lastDigit;
    console.log("reversedX >>> ", reversedX);
    // remove the last digit from xCopy
    xCopy = (xCopy / 10) | 0;
    console.log("xCopy >>> ", xCopy);
  }

  console.log("reversedXFinal >>> ", reversedX);
  return x === reversedX;
}
