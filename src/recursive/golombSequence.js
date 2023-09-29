/**
 *
 * @param {number} n
 * @returns {number}
 */
export function golombSequence(n) {
  console.log("hello");
  console.log(n);
  if (n === 1) {
    return 1;
  }
  return 1 + golombSequence(n - golombSequence(golombSequence(n - 1)));
}
