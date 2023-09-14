import { singleNumber } from "../singleNumber";

describe("Single Number", () => {
  it("should return the element if the length is 1", () => {
    const result = singleNumber([2]);
    expect(result).toBe(2);
  });

  it("should return the element that appears only once", () => {
    const result = singleNumber([2, 2, 5]);
    console.log("result", result);
    expect(result).toBe(5);
  });
});
