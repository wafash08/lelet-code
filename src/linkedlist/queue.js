import { DoublyLinkedlist } from "./doublyLinkedlist";

export class Queue {
  constructor() {
    this.data = new DoublyLinkedlist();
  }

  enqueue(element) {
    this.data.insertAtEnd(element);
  }

  dequeue() {
    const removedNode = this.data.removeFromFront();
    return removedNode.data;
  }

  read() {
    if (!this.data.firstNode) {
      return null;
    } else {
      return this.data.firstNode.data;
    }
  }
}
