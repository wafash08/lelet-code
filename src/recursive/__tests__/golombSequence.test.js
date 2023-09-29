import { golombSequence } from "../golombSequence";

describe("Golomb Sequence", () => {
  it("should return 4 if the n is 6", () => {
    const sequence = golombSequence(6);
    expect(sequence).toBe(4);
  });
});
