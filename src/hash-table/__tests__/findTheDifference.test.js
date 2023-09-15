import { findTheDifference } from "../findTheDifference";

describe("Find The Difference", () => {
  // it("should immediately return the second arg if the first one is empty", () => {
  //   const result = findTheDifference("", "a");

  //   expect(result).toBe("a");
  // });

  // it("should return the difference between two args", () => {
  //   const result = findTheDifference("ab", "abc");

  //   expect(result).toBe("c");
  // });

  it("should return the difference between two args", () => {
    const result = findTheDifference("a", "aa");

    expect(result).toBe("a");
  });
});
