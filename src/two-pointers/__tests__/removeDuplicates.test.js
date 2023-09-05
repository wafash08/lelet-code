import { removeDuplicates } from "../removeDuplicates";

describe("Remove Duplicates", () => {
  it("should return 0 if nums is empty", () => {
    const result = removeDuplicates([]);

    console.log(result);
    expect(result).toBe(0);
  });
});
