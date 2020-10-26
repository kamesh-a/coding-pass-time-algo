/**
 * Homework Problem (Level: Medium)
 * Given an array with n marbles colored Red, White or Blue, sort them so that marbles of the same color are adjacent,
 * with the colors in the order Red, White and Blue.
 * Assume the colors are given as numbers - 0 (Red), 1 (White) and 2 (Blue).
 * For example, if A = [1,0,1,2,1,0,1,2], Output = [0,0,1,1,1,1,2,2].
 */

/**
 * Question regarding problem:
 * 1. Will it contain other than 0,1,2?
 * A No
 *
 * 2. Will it contain only two or only on color pattern?
 * A. Yes
 *
 * 3. What is the output when input is empty or null?
 * A. 'invalid input'.
 */

function swap(iArr, i, boundary) {
  const temp = iArr[i];
  iArr[i] = iArr[boundary];
  iArr[boundary] = temp;
}

export default function nMarbleColorsProblem(iArr, pivot) {
  if (iArr && iArr.length && pivot) {
    let lowBoundary = 0;
    let upperBoundary = iArr.length - 1;
    let runner = 0;
    while (runner < upperBoundary) {
      let value = iArr[runner];
      if (value > pivot) {
        swap(iArr, runner, upperBoundary);
        upperBoundary--;
      } else if (value < pivot) {
        swap(iArr, runner, lowBoundary);
        lowBoundary++;
        runner++;
      } else {
        runner++;
      }
    }
    return iArr;
  }
  return "invalid input";
}
