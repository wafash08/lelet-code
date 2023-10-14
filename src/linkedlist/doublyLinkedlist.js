import { Node } from "./node";

export class DoublyLinkedlist {
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
  }

  insertAtEnd(value) {
    // initialize new node with the given value
    const newNode = new Node(value);
    // if there are no elements yet in the list
    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      // if the list has at least one
      newNode.previousNode = this.lastNode;
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
  }

  // bug: meskipun sudah dihapus, ketika hanya ada satu elemen di list, lastNode tetap memiliki data yang seharunya sudah terhapus
  /**
   *
   * @returns {Node} Removed node
   */
  removeFromFront() {
    const removedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    return removedNode;
  }

  printInReverse() {
    let currentNode = this.lastNode;
    console.log(currentNode);
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.previousNode;
    }
  }
}

// const doubly = new DoublyLinkedlist()
