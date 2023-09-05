/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
export function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      // console.log("sebelum increment >> ", i);
      i++;
      // console.log("sesudah increment >> ", i);
      // console.log("nums sesudah increment >> ", nums[i]);
      nums[i] = nums[j];
    }
  }
  return i + 1;

  /*
    or this
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i + 1; 
  */
}

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5, [0,1,2,3,4,_,_,_,_,_]
