/**
 *
 * @param {string[]} strs
 * @return {string}
 * @see https://stackoverflow.com/questions/68702774/longest-common-prefix-in-javascript
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 */

export function longestCommonPrefix(strs) {
  if (!strs[0] || strs.length == 1) return strs[0] || "";

  let i = 0;
  while (strs[0][i] && strs.every(str => str[i] === strs[0][i])) {
    i++;
  }

  return strs[0].substring(0, i);
}
