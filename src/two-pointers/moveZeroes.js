/**
 *
 * @param {number[]} nums
 * @returns {void}
 */
export function moveZeroes(nums) {
  // bikin dua pointer
  let slow = 0;
  let fast = slow + 1;
  // iterasi nums
  while (fast < nums.length) {
    console.log("slow >> ", slow);
    console.log("fast >> ", fast);
    // periksa apakah nums[slow] === 0
    if (nums[slow] === 0) {
      // kalau iya, lalu periksa apakah nums[fast] !== 0
      if (nums[fast] !== 0) {
        // kalau iya, kita tuker posisi dengan nums[slow] yang memiliki nilai 0
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
        // geser si slow
        slow++;
      }
      // kalau bukan geser si fast
      fast++;
    } else {
      // kalau bukan, maka geser si slow dan si fast
      slow++;
      fast++;
    }
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
// setelah iterasi pertama [1, 0, 0, 3, 12]
// setelah iterasi kedua [1, 0, 0, 3, 12]
// setelah iterasi ketiga [1, 3, 0, 0, 12]
// setelah iterasi keempat [1, 3, 12, 0, 0]
