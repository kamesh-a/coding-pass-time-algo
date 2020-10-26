/**
 * Part 2: Using Aux Buffer to solve a very common interview problem
 * https://interviewcamp.io/courses/101687/lectures/4830254
 *
 * Complexity:
 *  Exponential Complexity O(4^n)
 */

let start = 1;

function printMnemonics(iPhoneNoArr) {
  const buf = new Array(iPhoneNoArr.length).fill(null);
  printWords(iPhoneNoArr, buf, 0, 0);
}

function printWords(iArr, buff, startIndex, bufIndex) {
  // Termination - base case
  if (bufIndex >= buff.length || startIndex >= iArr.length) {
    console.log(buff, start++);
    return;
  }

  const digit = iArr[startIndex];
  const letters = getLetters(digit);

  if (!letters.length) {
    printWords(iArr, buff, startIndex + 1, bufIndex);
  }

  for (const letter of letters) {
    buff[bufIndex] = letter;
    printWords(iArr, buff, startIndex + 1, bufIndex + 1);
  }
}

function getLetters(digit) {
  switch (digit) {
    case 2:
      return ["a", "b", "c"];
    case 3:
      return ["d", "e", "f"];
    case 4:
      return ["g", "h", "i"];
    case 5:
      return ["j", "k", "l"];
    case 6:
      return ["m", "n", "o"];
    case 7:
      return ["p", "q", "r", "s"];
    case 8:
      return ["t", "u", "v"];
    case 9:
      return ["w", "x", "y", "z"];
    case 0:
    case 1:
    default:
      return [];
  }
}

printMnemonics([2, 3, 4]);
