/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

export function getIntersection(arr1, arr2) {
  const intersections = [];
  const hashTable = {};

  for (const value of arr1) {
    hashTable[value] = true;
  }

  for (const value of arr2) {
    if (hashTable[value]) {
      intersections.push(value);
    }
  }

  return intersections;
}
