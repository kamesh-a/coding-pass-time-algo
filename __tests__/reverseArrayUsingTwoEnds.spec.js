import reverseArrayWithTwoEnds from "../src/week-1/reverseArrayUsingTwoEnds";

describe("Reverse Array Using Two ends", () => {
  test("should test empty array", () => {
    let input = [];
    let expectedOutput = "inavlid input";
    expect(reverseArrayWithTwoEnds(input)).toBe(expectedOutput);
  });

  test("should test null", () => {
    let input = null;
    let expectedOutput = "inavlid input";
    expect(reverseArrayWithTwoEnds(input)).toBe(expectedOutput);
  });

  test("should reverse array with 2 elements ", () => {
    let input = [1, 3];
    let expectedOutput = [3, 1];
    let output = reverseArrayWithTwoEnds(input);
    expect(output).toEqual(expectedOutput);
  });

  test("should reverse array with 3 or 4 elements ", () => {
    let input = [1, 2, 3, 4, 5, 6];
    let expectedOutput = [6, 5, 4, 3, 2, 1];
    let output = reverseArrayWithTwoEnds(input);
    expect(output).toMatchObject(expectedOutput);
  });

  test("should items with duplicates array", () => {
    let input = [3, 3, 6, 4, 5, 5];
    let expectedOutput = [5, 5, 4, 6, 3, 3];
    let output = reverseArrayWithTwoEnds(input);
    expect(output).toMatchObject(expectedOutput);
  });
});
