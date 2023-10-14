import { Queue } from "../queue";
describe("Queue with doubly linked list", () => {
  it("should insert data at the end", () => {
    const queue = new Queue();
    queue.enqueue("a");
    expect(queue.data.firstNode.data).toBe("a");
  });
  it("should remove data from front", () => {
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    const value = queue.dequeue();
    expect(value).toBe("a");
  });

  it("should read the first data", () => {
    const queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    const value = queue.read();
    expect(value).toBe("a");
  });
});
