import { findX } from "../findX";

describe("find the first occurence of x", () => {
  it("should return 3", () => {
    const result = findX("abcxefgh");
    expect(result).toBe(3);
  });
});
