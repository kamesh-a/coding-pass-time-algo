import binarySearchWithDuplicates from "../src/week-1/binarySearchWithDuplicates";

describe("binary search with duplicates", () => {
  test("should fail for null", () => {
    let i = null;
    let t = 10;
    let e = "invalid input";
    let o = binarySearchWithDuplicates(i, t);
    expect(o).toEqual(e);
  });

  test("should fail for []", () => {
    let i = [];
    let t = 10;
    let e = "invalid input";
    let o = binarySearchWithDuplicates(i, t);
    expect(o).toEqual(e);
  });

  test("should fail for target=null", () => {
    let i = [1, 2, 10, 11, 23, 44, 52, 98];
    let t = null;
    let e = "invalid input";
    let o = binarySearchWithDuplicates(i, t);
    expect(o).toEqual(e);
  });

  test("should give the index of search target 10.", () => {
    let i = [1, 2, 10, 11, 23, 44, 52, 98];
    let t = 10;
    let e = 2;
    let o = binarySearchWithDuplicates(i, t);
    expect(o).toEqual(e);
  });

  test("should give [1, 3, 4, 6, 6, 6, 7] === 3", () => {
    let i = [1, 3, 4, 6, 6, 6, 7];
    let t = 6;
    let e = 3;
    let o = binarySearchWithDuplicates(i, t);
    expect(o).toEqual(e);
  });

  test("should give [2, 3, 4, 4, 5, 6] === 2", () => {
    let i = [2, 3, 4, 4, 5, 6];
    let t = 4;
    let e = 2;
    let o = binarySearchWithDuplicates(i, t);
    expect(o).toEqual(e);
  });
});
