// Ref: https://interviewcamp.io/courses/101687/lectures/4830254
// Part-1

// Base case is here end of buffer space
// Base case is here end of length of arrayInput
function findBufferCandidates(arrInput, buffer, startIndex, bufIndex) {
  if (bufIndex === buffer.length) {
    console.log(`result:`, buffer);
    return;
  }

  if (startIndex === arrInput.length) {
    return;
  }

  for (let index = startIndex; index < arrInput.length; index++) {
    const e = arrInput[index];
    buffer[bufIndex] = e;
    console.log(
      `depth[${bufIndex + 1}] == currentIndex :${index}, buffIndex:${
        bufIndex + 1
      }`
    );
    findBufferCandidates(arrInput, buffer, index + 1, bufIndex + 1);
  }
}

function printCombos(inputArr, xPairLimit) {
  let buffer = new Array(xPairLimit).fill("");
  findBufferCandidates(inputArr, buffer, 0, 0);
}

printCombos([1, 2, 3, 4, 5, 6, 7], 3);
