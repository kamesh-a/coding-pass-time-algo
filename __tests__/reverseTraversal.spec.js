import cloneEvenNumbers from "../src/week-1/cloneEvenNumbers";

describe("reverse travasel of array excersise", () => {
  test("empty input array", () => {
    expect(cloneEvenNumbers([])).toBe("Invalid input");
  });

  test("null input", () => {
    expect(cloneEvenNumbers(null)).toBe("Invalid input");
  });

  test("single array input", () => {
    let expected = [1];
    expect(cloneEvenNumbers([1])).toMatchObject(expected);
  });

  test("mixed values with even and odd", () => {
    let expected = [1, 2, 2, 5, 6, 6, 8, 8];
    let input = [1, 2, 5, 6, 8, -1, -1, -1];
    let output = cloneEvenNumbers(input);
    expect(output).toMatchObject(expected);
  });

  test("input contains only odd", () => {
    let expected = [1, 3, 5];
    let input = [1, 3, 5];
    let output = cloneEvenNumbers(input);
    expect(output).toMatchObject(expected);
  });
});
