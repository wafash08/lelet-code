/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 *
 */

export function twoSum(nums, target) {
  let numsMap = new Map();
  let currIdx = 0;

  while (currIdx < nums.length) {
    let remaining = target - nums[currIdx];

    console.log("remaining >>> ", remaining);
    if (numsMap.has(remaining)) {
      return [numsMap.get(remaining), currIdx];
    }

    numsMap.set(nums[currIdx], currIdx);
    console.log("numsMap >>> ", numsMap);
    currIdx++;
  }

  // with object implementation
  // let seen = {};

  // let currIdx = 0;
  // while (currIdx < nums.length) {
  //   let remaining = target - nums[currIdx];

  //   console.log("remaining >>> ", remaining);
  //   if (seen[remaining] !== undefined) {
  //     return [seen[remaining], currIdx];
  //   }

  //   seen[nums[currIdx]] = currIdx;
  //   console.log("seen >>> ", seen);
  //   currIdx++;
  // }
  return [];
}
