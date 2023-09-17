import { timeRequiredToBuy } from "../timeRequiredToBuy";

describe("Time required to buy", () => {
  it("should return ", () => {
    const result = timeRequiredToBuy([2, 3, 2], 2);
    expect(result).toBe(6);
  });
  it("should return ", () => {
    const result = timeRequiredToBuy([5, 1, 1, 1], 0);
    expect(result).toBe(8);
  });
});
