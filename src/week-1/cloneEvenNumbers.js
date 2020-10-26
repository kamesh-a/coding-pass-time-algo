/**
 * Given an array of numbers, replace each even number with two of the same number.
 * e.g, [1,2,5,6,8, , , ,] -> [1,2,2,5,6,6,8,8].
 * Assume that the array has the exact amount of space to accommodate the result.
 */

/**
 * Approach we are going to use reverse traversal.
 * Having two pointer i and end;
 */

export default function duplicateEvenNumber(iArr) {
  if (iArr && iArr.length) {
    let end = iArr.length;
    let current = end-1;
    while (current > 0) {
      let cValue = iArr[current];
      if (cValue !== -1) {
        if (cValue % 2 == 0) {
          iArr[--end] = cValue;
        }
        iArr[--end] = cValue;
      }
      --current;
    }
    return iArr;
  }

  return "Invalid input";
}
