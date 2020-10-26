import slidingWindow from "../src/week-1/slidingWindow";

describe("Sliding window sub string ", () => {
  test("should return pair of indices", () => {
    let input = [1, 2, 3, 5, 2];
    let target = 8;
    let expected = [2, 3];
    let output = slidingWindow(input, target);
    expect(output).toMatchObject(expected);
  });
});
