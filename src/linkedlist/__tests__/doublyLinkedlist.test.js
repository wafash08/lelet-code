import { DoublyLinkedlist } from "../doublyLinkedlist";

describe("Doubly linkedlist", () => {
  it("should return null if there is no data", () => {
    const doubly = new DoublyLinkedlist();
    expect(doubly.firstNode).toBeNull();
    expect(doubly.lastNode).toBeNull();
  });

  describe("insertAtEnd", () => {
    it("should insert 'a' at the end if there is no data yet", () => {
      const doubly = new DoublyLinkedlist();
      doubly.insertAtEnd("a");
      expect(doubly.firstNode.data).toBe("a");
      expect(doubly.lastNode.data).toBe("a");
    });

    it("should make 'a' as the firstNode and 'c' as the lastNode if inserted a, b, then c", () => {
      const doubly = new DoublyLinkedlist();
      doubly.insertAtEnd("a");
      doubly.insertAtEnd("b");
      doubly.insertAtEnd("c");
      expect(doubly.firstNode.data).toBe("a");
      expect(doubly.lastNode.data).toBe("c");
    });
  });

  describe("removeFromFront", () => {
    it("should remove 'a' if there is just 'a' in the list", () => {
      const doubly = new DoublyLinkedlist();
      doubly.insertAtEnd("a");
      const removed = doubly.removeFromFront();
      // console.log("firstNode >> ", doubly.firstNode);
      // console.log("lastNode >> ", doubly.lastNode);
      expect(removed.data).toBe("a");
      // expect(doubly.firstNode.data).toBeNull();
      // expect(doubly.lastNode.data).toBeNull();
    });

    it("should remove firstNode", () => {
      const doubly = new DoublyLinkedlist();
      doubly.insertAtEnd("c");
      doubly.insertAtEnd("d");
      doubly.insertAtEnd("e");
      const removed = doubly.removeFromFront();

      console.log("firstNode >> ", doubly.firstNode);
      console.log("lastNode >> ", doubly.lastNode);

      expect(removed.data).toBe("c");
      expect(doubly.firstNode.data).toBe("d");
      expect(doubly.lastNode.data).toBe("e");
    });

    it("should print in reverse", () => {
      const doubly = new DoublyLinkedlist();
      doubly.insertAtEnd("c");
      doubly.insertAtEnd("d");
      doubly.insertAtEnd("e");

      doubly.printInReverse();
    });
  });
});
