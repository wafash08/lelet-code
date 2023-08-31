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
});
