/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function backspace_compare(s, t) {
  /**
   *
   * @param {string} str
   * @returns {string}
   */
  function build(str) {
    const stack = [];
    for (const char of str) {
      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    return stack.join("");
  }
  const build_s = build(s);
  const build_t = build(t);
  return build_s === build_t;
}
