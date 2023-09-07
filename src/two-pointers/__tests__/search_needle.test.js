import { search_needle } from "../search_needle";

describe("Find index of the first occurence in a string", () => {
  it("should return -1 if needle length is 0", () => {
    const result = search_needle("abc", "");

    expect(result).toBe(-1);
  });

  it("should return -1 if needle length is greater than haystack length", () => {
    const result = search_needle("abc", "abcd");

    expect(result).toBe(-1);
  });

  it("should return -1 the haystack, leetcode, doesn't contain the needle, leeto", () => {
    const result = search_needle("leetcode", "leeto");

    expect(result).toBe(-1);
  });

  it("should return the index of the first occurence of needle in haystack", () => {
    const result = search_needle("abcdefgh", "def");

    console.log(result);
    expect(result).toBe(3);
  });
});
