import slidingWindowFindSubString from "../src/week-1/homeWork/slidingWindowFindSubString";

describe("slidingWindowFindSubString spec", () => {
  test("should give max substring indexes", () => {
    let input = "whatwhywhere";
    let expected = "atwhy";
    let output = slidingWindowFindSubString(input);
    expect(output).toEqual(expected);
  });
});
