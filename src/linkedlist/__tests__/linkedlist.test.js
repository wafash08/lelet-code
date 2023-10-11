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
});
