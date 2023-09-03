/**
 * Class representing stack data structure
 */

export class Stack {
  /**
   * initialize data
   */
  #data;
  constructor() {
    this.#data = [];
  }

  /**
   * Read last element from the stack
   * @returns {string} last element of the stack
   */
  read() {
    let lastIndex;

    if (this.#data.length === 0) {
      return null;
    } else {
      lastIndex = this.#data.length - 1;
    }

    return this.#data[lastIndex];
  }

  /**
   * Get he number of elements in the stack
   * @returns {number} number of elements in the stack
   */
  size() {
    return this.#data.length;
  }

  /**
   * Insert the element at the last position in the stack
   * @param {string[]} element
   */
  push(element) {
    this.#data.push(element);
  }

  /**
   * Remove last element in the stack
   * @returns {string} removed element
   */
  pop() {
    const removedElement = this.#data.pop();
    if (!removedElement) {
      throw new Error("Element doesn't exist");
    }
    return removedElement[0];
  }
}
