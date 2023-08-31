/**
 *
 * @param { string[] } arr1
 * @param { string[] } arr2
 * @returns { boolean }
 */

export function isSubset(arr1, arr2) {
  // if either param length is 0, return false
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }

  let largerArr;
  let smallerArr;

  // determine which array is larger
  if (arr1.length > arr2.length) {
    largerArr = arr1;
    smallerArr = arr2;
  } else {
    largerArr = arr2;
    smallerArr = arr1;
  }

  // store all items from largerArr inside hashTable
  const hashTable = new Map();

  for (const str of largerArr) {
    hashTable.set(str, true);
  }

  // iterate through each item in smallerArr and return false if we encounter an item that is not inside hashTable
  for (const str of smallerArr) {
    if (!hashTable.has(str)) {
      return false;
    }
  }

  return true;
}
