import reverseString from '../src/week-1/reverseStringBySpace';

describe("String reverse traversal technique", () => {
  test("should test for empty string", () => {
    let input = ''
    let expected = 'invalid input';
    expect(reverseString(input)).toBe(expected);
  });

  test("should test null value", () => {
    let input = null
    let expected = 'invalid input';
    expect(reverseString(input)).toBe(expected);
  });

  test("should test for begining of space", () => {
    let input = ' i help';
    let expected = 'help  i';
    expect(reverseString(input)).toBe(expected);
  });

  test("should ending with space", () => {
    let input = ' i help ';
    let expected = 'help  i';
    expect(reverseString(input)).toBe(expected);
  });

  test("should single word/character", () => {
    let input = 'single-word';
    let expected = 'single-word';
    expect(reverseString(input)).toBe(expected);
  });

  test("should normal case scenario with 2 words", () => {
    let input = 'i live in a house';
    let expected = 'house a in live i';
    expect(reverseString(input)).toBe(expected);
  });

});
