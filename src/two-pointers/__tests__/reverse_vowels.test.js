import { reverse_vowels } from "../reverse_vowels";

describe("Reverse vowels", () => {
  it("should return 'tatol'", () => {
    const result = reverse_vowels("total");
    expect(result).toBe("tatol");
  });
});
