/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

export function getIntersection(arr1, arr2) {
  const intersection = [];
  const hashTable = {};

  for (const value of arr1) {
    hashTable[value] = true;
  }

  for (const value of arr2) {
    if (hashTable[value]) {
      intersection.push(value);
    }
  }

  return intersection;
}
