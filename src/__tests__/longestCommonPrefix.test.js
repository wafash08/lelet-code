import { longestCommonPrefix } from "../longestCommonPrefix";

describe("Find the longest common prefix", () => {
  it("should return empty string if the length of array is 0", () => {
    const result = longestCommonPrefix([]);

    expect(result).toBe("");
  });

  it("should return empty string if there is no common prefix", () => {
    const result = longestCommonPrefix(["dog", "racecar", "car"]);

    expect(result).toBe("");
  });
});
