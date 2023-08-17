import { romanToInteger } from "../romanToInteger";

describe("Roman To Integer", () => {
  it("should convert III to 3", () => {
    const result = romanToInteger("III");

    expect(result).toBe(3);
  });
});
