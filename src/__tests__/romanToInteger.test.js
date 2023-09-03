import { romanToInteger } from "../romanToInteger";

describe("Roman To Integer", () => {
  it("should convert I to 1", () => {
    const result = romanToInteger("I");

    expect(result).toBe(1);
  });

  it("should return 0 if there is invalid roman", () => {
    const result = romanToInteger("IS");

    expect(result).toBe(0);
  });
  
  it("should convert IX to 9", () => {
    const result = romanToInteger("IX");

    expect(result).toBe(9);
  });
  
  it("should convert x with lowercase to 10", () => {
    const result = romanToInteger("x");

    expect(result).toBe(10);
  });
});
