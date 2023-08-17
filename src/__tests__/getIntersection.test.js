import { getIntersection } from "../getIntersection";

describe("Get Intersection", () => {
  it("should return intersections if arr1 contains value of arr2", () => {
    const result = getIntersection([0, 1, 2], [1]);

    expect(result).toContain(1);
  });

  it("should return [] if there are no intersections", () => {
    const result = getIntersection([0, 1], [2]);

    expect(result).toEqual([]);
  });
});
