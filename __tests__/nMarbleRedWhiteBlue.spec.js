import nMarbleProblem from "../src/week-1/homeWork/nMarbleRedWhiteBlue";

describe("nMarble red white blue", () => {
  test("should invalid input null", () => {
    let input = null;
    let expected = "invalid input";
    let output = nMarbleProblem(input);
    expect(output).toBe(expected);
  });

  test("should input []", () => {
    let input = [];
    let expected = "invalid input";
    let output = nMarbleProblem(input);
    expect(output).toBe(expected);
  });

  test("should input [1]", () => {
    let input = [2];
    let pivot = 1;
    let expectedOutput = [2];
    let output = nMarbleProblem(input, pivot);
    expect(output).toMatchObject(expectedOutput);
  });

  test("should input contains both pivot, boundary values", () => {
    let input = [2, 2, 2, 1, 1, 0, 0, 0];
    let pivot = 1;
    let output = nMarbleProblem(input, pivot);
    let expectedOutput = [0, 0, 0, 1, 1, 2, 2, 2];
    expect(output).toMatchObject(expectedOutput);
  });

  test("should input contains pivot, only upper boundary values", () => {
    let input = [1, 2, 2];
    let pivot = 1;
    let output = nMarbleProblem(input, pivot);
    let expectedOutput = [1, 2, 2];
    expect(output).toMatchObject(expectedOutput);
  });
});
