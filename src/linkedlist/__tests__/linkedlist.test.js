import { Node } from "../node";
import { Linkedlist } from "../linkedlist";

describe("Linkedlist", () => {
  it("should have firstNode", () => {
    const node = new Node("a");
    const list = new Linkedlist(node);

    expect(list.firstNode.data).toBe("a");
  });

  describe("read", () => {
    it("should return value at given index", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      const value = list.read(2);
      expect(value).toBe("c");
    });

    it("should return null if the given index is out of range", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      const value = list.read(3);
      expect(value).toBe(null);
    });
  });

  describe("indexOf", () => {
    it("should return index of the provided value", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      const value = list.indexOf("b");
      expect(value).toBe(1);
    });

    it("should return null if the value we are looking fot is not found", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      const value = list.indexOf("w");
      expect(value).toBe(null);
    });
  });

  describe("insertAt", () => {
    it("should insert at the beginning", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");

      node1.nextNode = node2;

      const list = new Linkedlist(node1);
      list.insertAt(0, "w");
      expect(list.firstNode.data).toBe("w");
    });

    it("should insert anywhere other than the beginning", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      list.insertAt(1, "w");
      list.insertAt(4, "s");
      const valueAt1 = list.read(1);
      const valueAt4 = list.read(4);
      expect(valueAt1).toBe("w");
      expect(valueAt4).toBe("s");
    });
  });

  describe("deleteAt", () => {
    it("should delete at the beginning", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      list.deleteAt(0);
      expect(list.firstNode.data).toBe("b");
    });

    it("should delete anywhere other than the beginning", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      list.deleteAt(2);
      const valueAt2 = list.read(2);
      const valueAt1 = list.read(1);
      expect(valueAt2).toBe(null);
      expect(valueAt1).toBe("b");
    });
  });

  describe("print", () => {
    it("should print all the list", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      list.print();
    });
  });

  describe("getLastElement", () => {
    it("should return the last element of the list", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      const lastElement = list.getLastElement();
      expect(lastElement).toBe("c");
    });
  });

  describe("reverse", () => {
    it("should reverse the list", () => {
      const node1 = new Node("a");
      const node2 = new Node("b");
      const node3 = new Node("c");

      node1.nextNode = node2;
      node2.nextNode = node3;

      const list = new Linkedlist(node1);
      list.reverse();
      expect(list.firstNode.data).toBe("c");
      expect(list.getLastElement()).toBe("a");
    });
  });
});
