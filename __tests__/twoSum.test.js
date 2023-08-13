import { twoSum } from "../twoSum";

describe("Two Sum", () => {
  it("should return two idices whose summed up value matches the target", () => {
    const result = twoSum([2, 7, 11, 13], 9);

    expect(result).toEqual([0, 1]);
  });
});
