import continousSubArray from "../src/week-1/homeWork/continousSubArray";

describe("medium: continous sub array problem", () => {
  test("should null input", () => {
    let input = null;
    let expected = "invalid input";
    let output = continousSubArray(input);
    expect(output).toBe(expected);
  });

  test("should empty array input", () => {
    let input = [];
    let expected = 0;
    let output = continousSubArray(input);
    expect(output.length).toBe(expected);
  });

  test("should give inputs with dips and bumps - case 1", () => {
    let input = [1, 2, 4, 5, 3, 5, 6, 7];
    let expected = [4, 5, 3];
    let output = continousSubArray(input);
    expect(output).toMatchObject(expected);
  });

  test("should give inputs with dips and bumps - case 2", () => {
    let input = [1, 2, 3, 6, 4, 7, 4, 8, 9, 19];
    let expected = [6, 4, 7, 4];
    let output = continousSubArray(input);
    expect(output).toMatchObject(expected);
  });

  test("should give inputs with one side extension", () => {
    let input = [1, 3, 5, 2, 6, 4, 7, 8, 9];
    let expected = [3, 5, 2, 6, 4];
    let output = continousSubArray(input);
    expect(output).toMatchObject(expected);
  });

  test("should give inputs with both side extensions- 2", () => {
    let input = [1, 2, 4, 5, 3, 7, 5, 6, 8];
    let expected = [4, 5, 3, 7, 5, 6];
    let output = continousSubArray(input);
    expect(output).toMatchObject(expected);
  });
});
