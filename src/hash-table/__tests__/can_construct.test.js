import { can_construct } from "../can_construct";

describe("can_construct", () => {
  it("should return false if ransomNote = 'a', magazine = 'b'", () => {
    const result = can_construct("a", "b");
    expect(result).toBe(false);
  });
  it("should return false if ransomNote = 'aa', magazine = 'ab'", () => {
    const result = can_construct("aa", "ab");
    expect(result).toBe(false);
  });
  it("should return true if ransomNote = 'aa', magazine = 'aab'", () => {
    const result = can_construct("aa", "aab");
    expect(result).toBe(true);
  });
});
