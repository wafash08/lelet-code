import { Node } from "./node";

export class Linkedlist {
  /**
   *
   * @param {Node} firstNode
   */
  constructor(firstNode) {
    this.firstNode = firstNode;
  }

  /**
   *
   * @param {number} index
   * @returns {any}
   *
   * Read value at the given index
   */
  read(index) {
    // we begin at the first node of the list
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      // we keep following the links of each node until we get to the index we are looking for
      currentNode = currentNode.nextNode;
      currentIndex++;
      // if we are past the end of the list, that means the value cannot be found in the list, so return null
      if (!currentNode) {
        return null;
      }
    }
    return currentNode.data;
  }

  /**
   *
   * @param {Node} value
   * @returns {number} the index of the value
   * Check whether the value exists or not
   */
  indexOf(value) {
    // We begin at the first node of the list
    let currentNode = this.firstNode;
    let currentIndex = 0;

    console.log("current node", currentNode);
    while (currentNode.nextNode) {
      // if we find the data we are looking for, we return it
      if (currentNode.data === value) {
        return currentIndex;
      }
      // otherwise, we move on the next node
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    // if we get through the entire list without finding the data, we return null
    return null;
  }
}
