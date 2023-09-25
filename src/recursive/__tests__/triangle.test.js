import { triangle } from "../triangle";

describe("Triangle number", () => {
  it("should return 28", () => {
    const result = triangle(7);
    expect(result).toBe(28);
  });
});
