import prefixSum from "../src/week-1/prefixSum";

describe("Prefix Sum Problem", () => {
  test("should return false for null", () => {
    let input = null;
    let target = 1;
    let expected = "invalid input";
    let output = prefixSum(input, target);
    expect(output).toEqual(expected);
  });

  test("should return false for []", () => {
    let input = [];
    let target = 1;
    let expected = "invalid input";
    let output = prefixSum(input, target);
    expect(output).toEqual(expected);
  });

  test("should return false for empty target", () => {
    let input = [];
    let expected = "invalid input";
    let output = prefixSum(input);
    expect(output).toEqual(expected);
  });

  test("should return indices for iArr and target - case-1", () => {
    let input = [2, 4, -2, 1, -3, 5, -3];
    let target = 0;
    let expected = [4, -2, 1, -3];
    let output = prefixSum(input, target);
    expect(output).toMatchObject(expected);
  });

  test("should return indices for iArr and target - case-2", () => {
    let input = [2, 4, -2, 1, -3, 5, -3];
    let target = 5;
    let expected = [2, 4, -2, 1];
    let output = prefixSum(input, target);
    expect(output).toMatchObject(expected);
  });

  test("should return indices for iArr and target - case-3", () => {
    let input = [2, 1, -3, -5, 16, 1, 3];
    let target = 8;
    let expected = [-3, -5, 16];
    let output = prefixSum(input, target);
    expect(output).toMatchObject(expected);
  });
});
