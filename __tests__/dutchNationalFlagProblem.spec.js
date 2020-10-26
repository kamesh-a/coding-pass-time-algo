import dutchNationalFlag from "../src/week-1/homeWork/dutchNationalFlagProblem";

describe("dutchNationalFlagProblem tests", () => {
  test("should invalid input null", () => {
    let input = null;
    let expected = "invalid input";
    let output = dutchNationalFlag(input);
    expect(output).toBe(expected);
  });

  test("should input []", () => {
    let input = [];
    let expected = "invalid input";
    let output = dutchNationalFlag(input);
    expect(output).toBe(expected);
  });

  test("should input [5]", () => {
    let input = [5];
    let pivot = 4;
    let expectedOutput = [5];
    let output = dutchNationalFlag(input, pivot);
    expect(output).toMatchObject(expectedOutput);
  });

  test("should input contains both pivot, boundary values", () => {
    let input = [5, 2, 4, 4, 6, 4, 4, 3];
    let pivot = 4;
    let output = dutchNationalFlag(input, pivot);
    let expectedOutput = [3, 2, 4, 4, 4, 4, 6, 5];
    expect(output).toMatchObject(expectedOutput);
  });

  test("should input contains pivot, only upper boundary values", () => {
    let input = [5, 4, 4, 6, 4, 4];
    let pivot = 4;
    let output = dutchNationalFlag(input, pivot);
    let expectedOutput = [4, 4, 4, 4, 6, 5];
    expect(output).toMatchObject(expectedOutput);
  });
});
