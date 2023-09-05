/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export function removeElement(nums, val) {
  let count = 0;
  for (const number of nums) {
    if (number !== val) {
      nums[count] = number;
      count++;
    }
  }
  return count;
}
