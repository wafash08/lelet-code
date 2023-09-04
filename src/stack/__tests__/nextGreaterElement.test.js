import { nextGreaterElement } from "../nextGreaterElement";

describe("Find next greater element", () => {
  it("should return [2] if there is greater element", () => {
    const result = nextGreaterElement([1], [1, 2]);

    console.log(result);
    expect(result).toEqual([2]);
  });

  it("should return [-1] if there is no greater element", () => {
    const result = nextGreaterElement([3], [1, 2]);

    console.log(result);
    expect(result).toEqual([-1]);
  });
});
