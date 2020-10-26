// Ref: https://interviewcamp.io/courses/101687/lectures/4830254
// Part-4
// Permutations will include all elements except which are already in current buffer.
// We are using a map kind of array to know the current item in use.

function printPermutations(inputArr, bufLimit) {
  let buf = new Array(bufLimit).fill();
  let bufMemoize = new Array(inputArr.length).fill();
  printRecursively(inputArr, buf, 0, bufMemoize);
}

function printRecursively(iArr, buf, bufIndex, isInBuffer) {
  // Base case
  if (bufIndex === buf.length) {
    console.log(buf);
    return;
  }

  for (let index = 0; index < iArr.length; index++) {
    const e = iArr[index];
    if (!isInBuffer[index]) {
      isInBuffer[index] = true;
      buf[bufIndex] = e;
      printRecursively(iArr, buf, bufIndex + 1, isInBuffer);
      isInBuffer[index] = false;
    }
  }
}

printPermutations([1, 2, 3, 4, 5, 6, 7], 3);
