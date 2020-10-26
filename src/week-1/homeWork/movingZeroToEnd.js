/**
    Level: Easy
    You are given an array of integers. 
    Rearrange the array so that all zeroes are atthe beginning of the array.
    For example,a = [4,2,0,1,0,3,0] -> [4,2,1,3,0,0,0]
 */

function swap(iArr, i, boundary) {
  let temp = iArr[i];
  iArr[i] = iArr[boundary];
  iArr[boundary] = temp;
}

function movingZeroToEnd(inputArr) {
  let boundary = inputArr.length - 1;
  if (inputArr && inputArr.length) {
    for (let index = inputArr.length - 1; index > 0; index--) {
      const element = inputArr[index];
      if (element === 0) {
        swap(inputArr, index, boundary);
        boundary--;
      }
    }
    return inputArr;
  }
  return "invalid input";
}

console.log(movingZeroToEnd([4, 2, 0, 1, 0, 3, 0]));