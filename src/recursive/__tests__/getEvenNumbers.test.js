import { getEvenNumbers } from "../getEvenNumbers";

describe("Get even numbers", () => {
  it("should return new array containing even numbers", () => {
    const array = [1, 2, 3, 4];
    const evens = getEvenNumbers(array);

    console.log(evens);
    expect(evens).toEqual([2, 4]);
  });
});
