/**
 Question 3 (discussed in video below): 
 (Level: Medium) 
 Dutch National Flag Problem: Given an array of integers A and a pivot, rearrange A in the following order:
 [Elements less than pivot, elements equal to pivot, elements greater than pivot]
 For example, if A = [5,2,4,4,6,4,4,3] and pivot = 4 -> result = [3,2,4,4,4,4,6,5]
 Note: the order within each section doesn't matter.
*/

/**
 *
 * Sol:
 *  - lower boundary
 *  - upper boundary
 *  lower to upper boundary run.
 */

function swap(iArr, i, boundary) {
  const temp = iArr[i];
  iArr[i] = iArr[boundary];
  iArr[boundary] = temp;
}

export default function dutchNationalFlagProblem(inputArr, pivot) {
  if (inputArr && inputArr.length && pivot) {
    let lowerBoundary = 0;
    let upperBoundary = inputArr.length - 1;
    let runner = 0;
    while (runner < upperBoundary) {
      let current = inputArr[runner];
      if (current < pivot) {
        swap(inputArr, runner, lowerBoundary);
        runner++;
        lowerBoundary++;
      } else if (current > pivot) {
        swap(inputArr, runner, upperBoundary);
        upperBoundary--;
      } else {
        runner++;
      }
    }
    return inputArr;
  }
  return "invalid input";
}
