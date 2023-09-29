/**
 *
 * @param {number[]} array
 * @returns {number}
 */
export function max(array) {
  console.log("hello");
  if (array.length === 1) {
    return array[0];
  }

  // O(2 pangkat n)
  // if (array[0] > max(array.slice(1, array.length))) {
  //   return array[0];
  // } else {
  //   return max(array.slice(1, array.length));
  // }

  // O(N)
  let maxOfRemainder = max(array.slice(1, array.length));
  // console.log("maxOfRemainder", maxOfRemainder);
  if (array[0] > maxOfRemainder) {
    return array[0];
  } else {
    return maxOfRemainder;
  }
}

console.log(max([1, 2, 3, 4]));
