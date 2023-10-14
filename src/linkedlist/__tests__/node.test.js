import { Node } from "../node";
describe("Node", () => {
  it("should be able to initialize with the provided value", () => {
    const node = new Node("once");
    expect(node.data).toBe("once");
  });

  it("should return upon when initialized with once then upon", () => {
    const node1 = new Node("once");
    const node2 = new Node("upon");

    node1.nextNode = node2;
    expect(node1.nextNode.data).toBe("upon");
  });

  it("should have link to the previous node", () => {
    const node1 = new Node("once");
    const node2 = new Node("upon");

    node1.nextNode = node2;
    node2.previousNode = node1;
    console.log(node2);
    expect(node1.nextNode.data).toBe("upon");
    expect(node2.previousNode.data).toBe("once");
  });
});
