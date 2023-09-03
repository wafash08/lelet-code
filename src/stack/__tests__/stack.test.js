import { Stack } from "../stack";

describe("Stack", () => {
  it("should return size 0 if initialized with empty stack", () => {
    const result = new Stack();

    expect(result.size()).toBe(0);
  });

  it("should return size 1 if there is an element pushed into it", () => {
    const result = new Stack();
    result.push(["("]);

    expect(result.size()).toBe(1);
  });

  it("should return size 2 if there are two elements pushed into it consecutively", () => {
    const result = new Stack();
    result.push(["("]);
    result.push([")"]);

    expect(result.size()).toBe(2);
  });

  it("should return removed element and decrease the size", () => {
    const result = new Stack();
    result.push(["("]);
    result.push([")"]);
    const removed = result.pop();

    expect(removed).toBe(")");
    expect(result.size()).toBe(1);
  });

  it("should return removed element and decrease the size", () => {
    const result = new Stack();
    result.push(["("]);
    result.push([")"]);
    const removedOne = result.pop();
    const removedTwo = result.pop();

    expect(removedOne).toBe(")");
    expect(removedTwo).toBe("(");
    expect(result.size()).toBe(0);
  });

  it("should throw an error if the element you're trying to remove is not found", () => {
    const stack = new Stack();

    expect(() => {
      stack.pop();
    }).toThrow("Element doesn't exist");
  });

  it("should read last element", () => {
    const stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");

    const lastElement = stack.read();

    // console.log(lastElement);
    expect(lastElement).toBe("c");
  });

  it("should return null if you try reading empty stack", () => {
    const stack = new Stack();

    const lastElement = stack.read();

    console.log(lastElement);
    expect(lastElement).toBe(null);
  });
});
