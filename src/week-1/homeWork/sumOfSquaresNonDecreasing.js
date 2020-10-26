/**
 * Homework Problem 1 (Level: Easy)
 * --------------------------------
 * Given a sorted array in non-decreasing order, return an array of squares of each number, also in non-decreasing order.
 * For example: [-4,-2,-1,0,3,5] -> [0,1,4,9,16,25]
 * How can you do it in O(n) time?
 *
 * TODO: Redo this problem.
 */

function squares(no) {
  return no ** 2;
}

export default function sumOfSquaresNonDecreasingOrder(inputArray) {
  if (!inputArray) {
    return "invalid input";
  }

  let startIndex = 0;
  let endIndex = inputArray.length - 1;
  let output = new Array(inputArray.length);
  let resultIndex = endIndex;
  while (startIndex <= endIndex) {
    let first = squares(inputArray[startIndex]);
    let end = squares(inputArray[endIndex]);
    if (first > end) {
      output[resultIndex] = first;
      startIndex++;
    } else {
      output[resultIndex] = end;
      endIndex--;
    }
    resultIndex--;
  }
  return output;
}
