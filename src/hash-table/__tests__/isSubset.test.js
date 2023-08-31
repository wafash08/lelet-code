import { isSubset } from "../isSubset";

describe("Subset", () => {
  it("should return false if either array is empty", () => {
    const result = isSubset(["a", "b", "c"], []);

    expect(result).toBe(false);
  });

  it("should return false if there is item that is not inside larger array", () => {
    const result = isSubset(["a", "b", "c"], ["a", "e"]);

    expect(result).toBe(false);
  });

  it("should return true if all items are inside larger array", () => {
    const result = isSubset(["a", "b", "c"], ["a", "b"]);

    expect(result).toBe(true);
  });
});
