import { findFirstNonDuplicate } from "../findFirstNonDuplicate";

describe("Find fist non duplicate string", () => {
  // it("should return empty string id there is no non duplicate string", () => {
  //   const result = findFirstNonDuplicate("aabbcc");

  //   expect(result).toBe("");
  // });

  it("should return the first non duplicate letter", () => {
    const result = findFirstNonDuplicate("aabbcddefgh");

    expect(result).toBe("c");
  });
});
