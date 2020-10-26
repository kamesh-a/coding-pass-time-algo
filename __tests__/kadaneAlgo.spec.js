import kadaneAlg from "../src/week-1/kadaneAlgo";

describe("Kadane Algorithm specs", () => {
  test('should throw error "Invalid input"', () => {
    let input = [];
    let expected = "Invalid input";
    let fn = () => {
      kadaneAlg(input);
    };
    expect(fn).toThrowError(expected);
  });

  test('should have minium one element or throw exception "Invalid input"', () => {
    let input = null;
    let expected = "Invalid input";
    let fn = () => {
      kadaneAlg(input);
    };
    expect(fn).toThrowError(expected);
  });

  test("should have both -ve and +ve values - case 1", () => {
    let input = [1, 2, -1, 2, -3, 2, -5];
    let output = kadaneAlg(input);
    let expected = 4;
    expect(output).toEqual(expected);
  });

  test("should have both -ve and +ve values - case 2", () => {
    let input = [1, 2, 3, -4, -5, -6, 7, 8, 9];
    let output = kadaneAlg(input);
    let expected = 14;
    expect(output).toEqual(expected);
  });
});
