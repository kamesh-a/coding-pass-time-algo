import binarySearchInsertIndex from "../src/week-1/homeWork/binarySearchFindInsertIndex";

describe("binary search", () => {
  test("should fail for null", () => {
    let i = null;
    let t = 10;
    let e = "invalid input";
    let o = binarySearchInsertIndex(i, t);
    expect(o).toEqual(e);
  });

  test("should fail for []", () => {
    let i = [];
    let t = 10;
    let e = "invalid input";
    let o = binarySearchInsertIndex(i, t);
    expect(o).toEqual(e);
  });

  test("should give target = 3", () => {
    let i = [1, 2, 4, 5, 6, 8];
    let t = 3;
    let e = 2;
    let o = binarySearchInsertIndex(i, t);
    expect(o).toEqual(e);
  });

  test("should give target = 0", () => {
    let i = [1, 2, 4, 5, 6, 8];
    let t = 0;
    let e = 0;
    let o = binarySearchInsertIndex(i, t);
    expect(o).toEqual(e);
  });

  test("should give target = 4", () => {
    let i = [1, 2, 4, 5, 6, 8];
    let t = 4;
    let e = 3;
    let o = binarySearchInsertIndex(i, t);
    expect(o).toEqual(e);
  });
});
