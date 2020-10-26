/**
 * Two Sum Problem:
 * Find 2 numbers in a sorted array that sum to X.
 * For example, if A = [1,2,3,4,5] and X = 9, the numbers are 4 and 5
 *
 * Questions to Clarify:
 * Q. How do return the output?A.
 * Return it as a pair of numbers.
 *
 * Q. What to return if there is no result?
 * A. Return null.
 *
 * Q. Can the array have duplicates?
 * A. Yes
 *
 * Q. If there are more than one pair that qualify, which pair should I return?
 * For example, if a=[2,3,4,5] and target=7, the answer could be either {2,5} or {3,4}
 * A. Return whichever you like. As long as you return a correct pair, it’s fine.
 *
 *
 * A = [1,2,3,4,5]
 */

export default function twoSumPair(inputArr, target) {
  // input validation
  if (inputArr && target && inputArr.length) {
    let startIndex = 0;
    let endIndex = inputArr.length - 1;
    while (startIndex !== endIndex) {
      let leftPointerValue = inputArr[startIndex];
      let rightPointerValue = inputArr[endIndex];
      let sum = leftPointerValue + rightPointerValue;
      if (sum === target) {
        // we have reached target;
        return [leftPointerValue, rightPointerValue];
      } else if (sum > target) {
        // sum greater target so, reducing from end pointer end;
        endIndex--;
      } else {
        // sum lesser target so, increasing start pointer;
        startIndex++;
      }
    }
    // no match found
    return null;
  }
  return "invalid input";
}
