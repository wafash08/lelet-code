/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function nextGreaterElement(nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (const num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      const poppedNumber = stack.pop();
      map.set(poppedNumber, num);
    }
    stack.push(num);
  }

  for (const [idx, num] of Object.entries(nums1)) {
    if (map.has(num)) {
      nums1[idx] = map.get(num);
    } else {
      nums1[idx] = -1;
    }
  }
  return nums1;
}
