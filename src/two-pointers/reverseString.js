/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  console.log(s);
}

// console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
// console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // ["h","a","n","n","a","H"]
console.log(reverseString([])); // ["h","a","n","n","a","H"]
