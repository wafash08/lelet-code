/**
 *
 * @param {number} row
 * @param {number} column
 * @returns {number}
 */
export function uniquePaths(row, column) {
  if (row === 1 || column === 1) {
    return 1;
  }
  return uniquePaths(row - 1, column) + uniquePaths(row, column - 1);
}
