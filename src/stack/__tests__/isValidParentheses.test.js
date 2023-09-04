import { isValidParentheses } from "../isValidParentheses";

describe("Validate Parentheses", () => {
  // it("should return false if string doesn't contain brackets", () => {
  //   const result = isValidParentheses("abc");

  //   console.log(result);
  //   expect(result).toBe(false);
  // });

  it("should return false if there is only opening bracket", () => {
    const result = isValidParentheses("(");

    expect(result).toBe(false);
  });

  it("should return false if opening bracket is closed by different type closing bracket", () => {
    const result = isValidParentheses("(]");

    expect(result).toBe(false);
  });

  it("should return false if bracket pairs have wrong order", () => {
    const result = isValidParentheses("({[}])");

    expect(result).toBe(false);
  });

  it("should return true if opening bracket is closed by its same type closing bracket", () => {
    const result = isValidParentheses("({[]})");

    expect(result).toBe(true);
  });
});
