import { reverseString } from "../reverseString";

function reverse(arr) {
  reverseString(arr);
  return arr;
}
describe("Reverse string with in-place method", () => {
  it("should return ['b', 'a']", () => {
    const result = reverse(["a", "b"]);

    expect(result).toEqual(["b", "a"]);
  });

  it("should return [] if the length is 0", () => {
    const result = reverse([]);

    expect(result).toEqual([]);
  });

  it("should return [] if the array is ['']", () => {
    const result = reverse([""]);

    expect(result).toEqual([""]);
  });
});
