import { SortableArray } from "../sortableArray";

describe("Sortable array", () => {
  describe("partition", () => {
    it("should put pivot at correct place", () => {
      const array = [0, 5, 2, 1, 6, 3];
      const sortable = new SortableArray(array);
      sortable.partition(0, array.length - 1);
      expect(array).toEqual([0, 1, 2, 3, 6, 5]);
    });
  });

  describe("quicksort", () => {
    it("should sort the array", () => {
      const array = [0, 5, 2, 1, 6, 3];
      const sortable = new SortableArray(array);
      sortable.quicksort(0, array.length - 1);
      expect(array).toEqual([0, 1, 2, 3, 5, 6]);
    });
  });

  describe("quickselect", () => {
    it("should return the second lowest value", () => {
      const array = [0, 50, 20, 10, 60, 30];
      const sortable = new SortableArray(array);
      const secondLowestValue = sortable.quickselect(1, 0, array.length - 1);
      console.log(array);
      console.log(secondLowestValue);
      expect(secondLowestValue).toBe(10);
    });
  });
});
