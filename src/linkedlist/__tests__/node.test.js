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
});
