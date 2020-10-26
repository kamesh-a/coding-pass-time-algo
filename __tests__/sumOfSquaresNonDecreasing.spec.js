import sumOfSquaresNonDescreasingOrder from "../src/week-1/homeWork/sumOfSquaresNonDecreasing";

describe("sum of squares non-decreasing order", () => {
  test("should null input", () => {
    let input = null;
    let expected = "invalid input";
    let output = sumOfSquaresNonDescreasingOrder(input);
    expect(output).toBe(expected);
  });

  test("should [] empty input", () => {
    let input = [];
    let expected = 0;
    let output = sumOfSquaresNonDescreasingOrder(input);
    expect(output.length).toBe(expected);
  });

  test("should postivie and negative values", () => {
    let input = [-4, -2, -1, 0, 3, 5];
    let expected = [0, 1, 4, 9, 16, 25];
    let output = sumOfSquaresNonDescreasingOrder(input);
    expect(output).toMatchObject(expected);
  });
});
