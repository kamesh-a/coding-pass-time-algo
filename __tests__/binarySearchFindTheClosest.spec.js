import binarySearchToFindTheClosest from "../src/week-1/homeWork/binarySearchFindTheClosest";

describe(" binarySearchFindTheClosest.spec", () => {
  test("should find closes for target  = 6", () => {
    let i = [1, 2, 4, 5, 7, 8, 9];
    let t = 6;
    let e = 3;
    let o = binarySearchToFindTheClosest(i, t);
    expect(o).toEqual(e);
  });
});
