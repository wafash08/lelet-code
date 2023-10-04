export class SortableArray {
  /**
   *
   * @param {number[]} array
   */
  constructor(array) {
    this.array = array;
  }

  /**
   *
   * @param {number} leftPointer
   * @param {number} rightPointer
   * @returns {number}
   */
  partition(leftPointer, rightPointer) {
    // choose the right-most element as the pivot
    const pivotIndex = rightPointer;
    // grab the pivot value
    const pivot = this.array[pivotIndex];
    // start the right pointer immediately to the left of the pivot
    rightPointer--;

    while (true) {
      // move the left pointer to the right as long as it points to value that is less than the pivot
      while (this.array[leftPointer] < pivot) {
        leftPointer++;
      }
      // move the right pointer to the left as long as it points to value that is greater than the pivot
      while (this.array[rightPointer] > pivot) {
        rightPointer--;
      }
      // we check whether the left pointer has reached or gone beyond the right pointer. if it has, we break out of the loop so we can swap the pivot later on in our code
      if (leftPointer >= rightPointer) {
        break;
      } else {
        // if the left pointer is still to the left of the right pointer, we swap the values of the left and right pointers
        [this.array[leftPointer], this.array[rightPointer]] = [
          this.array[rightPointer],
          this.array[leftPointer],
        ];
        // we move the left pointer over to the right
        leftPointer++;
      }
    }
    // we swap the value of the left pointer with the pivot
    [this.array[leftPointer], this.array[pivotIndex]] = [
      this.array[pivotIndex],
      this.array[leftPointer],
    ];
    // we return the pointer
    return leftPointer;
  }

  /**
   *
   * @param {number} leftIndex
   * @param {number} rightIndex
   */
  quicksort(leftIndex, rightIndex) {
    // base case: the subarray has 0 or 1 elements
    if (rightIndex - leftIndex <= 0) {
      return;
    }
    // partition the range of elements and grab the index of the pivot
    const pivotIndex = this.partition(leftIndex, rightIndex);
    // recursively call this quicksort method on whatever is to the left of the pivot
    this.quicksort(leftIndex, pivotIndex - 1);
    // recursively call this quicksort method on whatever is to the right of the pivot
    this.quicksort(pivotIndex + 1, rightIndex);
  }

  /**
   *
   * @param {number} nthLowestValue
   * @param {number} leftIndex
   * @param {number} rightIndex
   * @returns {number}
   */
  quickselect(nthLowestValue, leftIndex, rightIndex) {
    // base case - that is, that the subarray has one cell, hence we've found the value we're looking for
    if (rightIndex - leftIndex <= 1) {
      console.log("leftIndex >> ", leftIndex);
      console.log("rightIndex >> ", rightIndex);
      console.log("hello");
      console.log("array >> ", this.array);
      return this.array[leftIndex];
    }
    // partition the array and grab the index of the pivot
    const pivotIndex = this.partition(leftIndex, rightIndex);
    // console.log("leftIndex >> ", leftIndex);
    // console.log("rightIndex >> ", rightIndex);
    // console.log("pivotIndex >> ", pivotIndex);
    // if the value is in the left of the pivot
    if (nthLowestValue < pivotIndex) {
      // recursively perform quickselect on the subarray to the left of the pivot
      this.quickselect(nthLowestValue, leftIndex, pivotIndex - 1);
      // if the value is in the right of the pivot
    } else if (nthLowestValue > pivotIndex) {
      // recursively perform quickselect on the subarray to the right of the pivot
      this.quickselect(nthLowestValue, pivotIndex + 1, rightIndex);
      // if the value === pivot index
    } else {
      // if after the partition, the pivot position is in the same spot as nthLowestValue, we've found the value we are looking for
      // console.log("pivotIndex inside >> ", pivotIndex);
      // console.log("array inside >> ", this.array);
      // console.log("the value >> ", this.array[pivotIndex]);
      return this.array[pivotIndex];
    }
  }
}
