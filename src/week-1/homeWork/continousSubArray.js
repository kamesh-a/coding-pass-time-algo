/**
 * Level: Medium: Shortest Unsorted Subarray to Sort the Array
 *
 * Given an array of integers, find the shortest sub array, that if sorted, results in theentire array being sorted.
 * For example:
 * [1,2,4,5,3,5,6,7] --> [4,5,3] - If you sort from indices 2 to 4, the entire array is sorted.
 * [1,3,5,2,6,4,7,8,9] --> [3,5,2,6,4] -  If you sort from indices 1 to 5, the entire array is sorted.
 *
 * Q. How to return the result?
 * A. Return the result as a pair of indice
 *
 * Intution on this problems:
 *  - There dips and bumps in the input numbers.
 *  - When dips and bump with extension check is done, smallest array is the one we have to sort.
 * TODO: Redo this problem.
 */

// type SubArray<T> = Array<T> | null | string;
// type SubArray = Array<number> | null | string;
// type inputArray = Array<number>;

export default function continousSubArray(inputArr) {
  // input validation
  if (!inputArr) {
    return "invalid input";
  }

  if (!inputArr.length) {
    return inputArr;
  }

  // Moving forward direction, to find a dip.
  let startPointer = 0;
  let endPointer = inputArr.length - 1;
  let output = [];
  for (let index = 1; index < inputArr.length; index++) {
    let current = inputArr[index];
    let previous = inputArr[index - 1];
    if (current < previous) {
      // dip found during iteration.
      let startPointer = index;
      break;
    }
  }

  // Moving backward direction, to find a bump.
  for (let endIndex = inputArr.length - 1; endIndex > 0; endIndex--) {
    let current = inputArr[endIndex];
    let previous = inputArr[endIndex - 1];
    if (current > previous) {
      // bump found during iteration.
      endPointer = endIndex;
      break;
    }
  }

  console.log(startPointer, endPointer);

  // Look for extension numbers;
  // dip extension
  let dipPointer = startPointer;
  while (dipPointer > 0) {
    let start = inputArr[startPointer];
    let previous = inputArr[dipPointer - 1];
    if (start > previous) {
      dipPointer--;
    } else {
      break;
    }
  }
  startPointer = dipPointer;

  // bump extension
  let bumpPointer = endPointer;
  while (bumpPointer < inputArr.length) {
    let end = inputArr[endPointer];
    let next = inputArr[bumpPointer + 1];
    if (next < end) {
      bumpPointer++;
    } else {
      break;
    }
  }

  endPointer = bumpPointer;

  for (let index = startPointer; index <= endPointer; index++) {
    const element = inputArr[index];
    output.push(element);
  }

  return output;
}
