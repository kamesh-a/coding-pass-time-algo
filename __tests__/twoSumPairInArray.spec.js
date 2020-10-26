import twoSumPair from "../src/week-1/twoSumPairInArray";
describe("Two sum pair", () => {
  test("should empty array", () => {
    expect(twoSumPair([], 7)).toBe("invalid input");
  });

  test("should null input", () => {
    expect(twoSumPair(null, 7)).toBe("invalid input");
  });

  test("should null/invalid target", () => {
    expect(twoSumPair(null)).toBe("invalid input");
  });

  test("should get target pair without dupes", () => {
    let inputArr = [1, 2, 3, 4, 5];
    let target = 7;
    let output = twoSumPair(inputArr, target);
    let expectedOutput = [2, 5];
    expect(output).toMatchObject(expectedOutput);
  });

  test("should more than one pair matching", () => {
    let inputArr = [0, 1, 3, 4, 5];
    let target = 7;
    let output = twoSumPair(inputArr, target);
    let expectedOutput = [3, 4];
    expect(output).toMatchObject(expectedOutput);
  });

  test("should duplicate elements in array", () => {
    let inputArr = [1, 1, 3, 4, 5];
    let target = 7;
    let output = twoSumPair(inputArr, target);
    let expectedOutput = [3, 4];
    expect(output).toMatchObject(expectedOutput);
  });

  test("should negative value in match", () => {
    let inputArr = [-3, -2, 0, 1, 1, 3, 4, 5, 8, 9];
    let target = 7;
    let output = twoSumPair(inputArr, target);
    let expectedOutput = [-2, 9];
    expect(output).toMatchObject(expectedOutput);
  });
});
