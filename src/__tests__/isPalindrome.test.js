import { isPalindrome } from "../isPalindrome.js";

describe("Palindrome Number", () => {
  it("should return true if the number is a palindrom", () => {
    const result = isPalindrome(121);

    expect(result).toBe(true);
  });

  it("should return false if the number is not a palindrom", () => {
    const result = isPalindrome(123);

    expect(result).toBe(false);
  });
});
