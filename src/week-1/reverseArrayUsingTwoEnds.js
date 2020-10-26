/**
 * Reverse the order of elements in an array. For example,
 * A = [1,2,3,4,5,6],
 * Output = [6,5,4,3,2,1]
 *
 * A = [1]
 * B = [1]
 *
 * A = [1,2,3]
 *
 * - Modify exisitng Array
 * Time - O(n)
 * Space - O(1)
 */

function swapValues(inputArr, startIndex, endIndex) {
  if (inputArr) {
    let temp = inputArr[startIndex];
    inputArr[startIndex] = inputArr[endIndex];
    inputArr[endIndex] = temp;
  }
}

export default function reverseArrayFromBothEnds(inputArr) {
  // input validation
  if (inputArr && inputArr.length) {
    let endIndex = inputArr.length - 1;
    let startIndex = 0;
    while (startIndex < endIndex) {
      swapValues(inputArr, startIndex, endIndex);
      startIndex++;
      endIndex--;
    }
    return inputArr;
  }
  return "inavlid input";
}
