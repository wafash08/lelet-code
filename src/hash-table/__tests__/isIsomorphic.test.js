import { isIsomorphic } from "../isIsomorphic";

describe("Isomorphic string", () => {
  it("should return false if the length of s differs from t", () => {
    const result = isIsomorphic("abc", "ab");

    expect(result).toBe(false);
  });

  it("should return true", () => {
    const result = isIsomorphic("abc", "abc");

    expect(result).toBe(false);
  });
});
