import { findDuplicate } from "../findDuplicate";

describe("Find Duplicate Character", () => {
  it("should return duplicated string", () => {
    const result = findDuplicate(["a", "b", "c", "a"]);

    expect(result).toBe("a");
  });

  it("should return empty string if there is no duplicate", () => {
    const result = findDuplicate(["a", "b", "c"]);

    expect(result).toBe("");
  });
});
