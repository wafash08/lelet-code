/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const numTable = new Map();
  for (const num of nums) {
    if (numTable.has(num)) {
      numTable.clear();
      return true;
    } else {
      numTable.set(num, true);
    }
  }

  numTable.clear();
  console.log(numTable);
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));
