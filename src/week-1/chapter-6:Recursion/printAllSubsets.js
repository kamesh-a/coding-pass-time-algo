// Ref: https://interviewcamp.io/courses/101687/lectures/4830254
// Part-1

// Base case is here end of buffer space
// Base case is here end of length of arrayInput
// TODO: solution is same but printing array in order is not happening. find in web.
function findBufferCandidates(arrInput, buffer, startIndex, bufIndex) {
  if (bufIndex === buffer.length) {
    console.log(`result:`, buffer, bufIndex);
    return;
  }

  if (startIndex === arrInput.length) {
    return;
  }

  for (let index = startIndex; index < arrInput.length; index++) {
    const e = arrInput[index];
    buffer[bufIndex] = e;
    // console.log(
    //   `depth[${bufIndex + 1}] == currentIndex :${index}, buffIndex:${
    //     bufIndex + 1
    //   }`
    // );
    findBufferCandidates(arrInput, buffer, index + 1, bufIndex + 1);
  }
}

function printAllSubetsOfArray(inputArr) {
  for (let index = 0; index <= inputArr.length; index++) {
    let buffer = new Array(index).fill("");
    findBufferCandidates(inputArr, buffer, 0, 0);
  }
}

printAllSubetsOfArray([1, 2, 3]);
