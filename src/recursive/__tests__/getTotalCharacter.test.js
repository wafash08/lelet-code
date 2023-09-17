import { getTotalCharacters } from "../getTotalCharacters";

describe("Total character", () => {
  it("should return 0 if the length of array is 0", () => {
    const total = getTotalCharacters([]);
    expect(total).toBe(0);
  });

  it("should return the proper total of characters", () => {
    const total = getTotalCharacters(["abc", "def", "gh"]);
    expect(total).toBe(8);
  });
});
