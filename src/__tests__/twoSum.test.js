import { twoSum } from "../twoSum";

describe("Two Sum", () => {
  it("should return two idices whose summed up value matches the target", () => {
    const result = twoSum([2, 7, 11, 13], 9);

    expect(result).toEqual([0, 1]);
  });

  it("should return [] if there is no match", () => {
    const result = twoSum([2, 7, 11, 13], 100);

    expect(result).toEqual([]);
  });
});
