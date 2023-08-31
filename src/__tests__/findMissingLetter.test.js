import { findMissingLetter } from "../findMissingLetter";

describe("Find Missing Letter", () => {
  it("should return the missing letter", () => {
    const result = findMissingLetter("abc");

    expect(result).toContain("d");
  });

  it("should return the missing letter although the string is uppercase", () => {
    const result = findMissingLetter("ABC");

    expect(result).toContain("d");
  });

  it("should return empty string if there is no missing letter", () => {
    const result = findMissingLetter("abcdEFghijklmnopqrstuvwxyz");

    expect(result).toBe("");
  });
});
