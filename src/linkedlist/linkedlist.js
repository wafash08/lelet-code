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

  /**
   *
   * @param {number} index
   * @param {any} value
   */
  insertAt(index, value) {
    // we create new node with the provided value
    const newNode = new Node(value);
    // if we are inserting at the beginning of the list
    if (index === 0) {
      // have our new node link to what was the first node
      newNode.nextNode = this.firstNode;
      // establish that our new node is now the list's first node
      this.firstNode = newNode;
      return;
    }
    // if we are inserting anywhere other than the beginning
    let currentNode = this.firstNode;
    let currentIndex = 0;
    // first, we access the node immediately before where the new node will go
    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    // have the new node link to the next node
    newNode.nextNode = currentNode.nextNode;
    // modify the link of the previous node to point to our new node
    currentNode.nextNode = newNode;
  }

  /**
   *
   * @param {number} index
   */
  deleteAt(index) {
    // if we are deleting at the first node
    if (index === 0) {
      // simply set the first node to be what is currently the second node
      this.firstNode = this.firstNode.nextNode;
    }

    // otherwise
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      // first, we find the node immediately before the one we want to delete and call it currentNode
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    // we find the node that comes after the one we are deleting
    const nodeAfterDeletedNode = currentNode.nextNode.nextNode;
    // we change the link of the currentNode to point to the node after deleted node, leaving the node we want to delete out of the list
    currentNode.nextNode = nodeAfterDeletedNode;
  }

  print() {
    let currentNode = this.firstNode;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.nextNode;
    }
  }

  getLastElement() {
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return currentNode.data;
  }

  reverse() {
    let currentNode = this.firstNode;
    let previousNode = null;

    while (currentNode) {
      let nextNode = currentNode.nextNode;
      currentNode.nextNode = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.firstNode = previousNode;
  }

  // todo
  // delete at the middle
}
