import { backspace_compare } from "../backspace_compare";

describe("compare backspace", () => {
  it("should return true if both s and t are the same after getting backspaced", () => {
    const result = backspace_compare("ab#c", "ad#c");
    expect(result).toBe(true);
  });
  it("should return false if both s and t are not the same after getting backspaced", () => {
    const result = backspace_compare("a#c", "b");
    expect(result).toBe(false);
  });
});
