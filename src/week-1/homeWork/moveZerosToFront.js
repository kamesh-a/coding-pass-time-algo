/**
    Level: Easy
    You are given an array of integers. 
    Rearrange the array so that all zeroes are atthe beginning of the array.
    For example,a = [4,2,0,1,0,3,0] -> [0,0,0,4,1,2,3]
 */

function swap(inputArr, index, boundary) {
  console.log(`${inputArr}, i[${index}]= ${inputArr[index]}, boundary[${boundary}] = ${inputArr[boundary]}`);
  let temp = inputArr[index];
  inputArr[index] = inputArr[boundary];
  inputArr[boundary] = temp;
}

// Creating a begining partition.
function moveZeroToFront(inputArr) {
  if (inputArr) {
    let lowBoundary = 0;
    for (let i = 0; i < inputArr.length; i++) {
      const element = inputArr[i];
      if (element === 0) {
        swap(inputArr, i, lowBoundary);
        lowBoundary++;
      }
    }
    return inputArr;
  }
  return "invalid input";
}

console.log(moveZeroToFront([4, 2, 0, 1, 0, 3, 0]));
