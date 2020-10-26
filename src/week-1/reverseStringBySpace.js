/**
 * Level: EasyGiven a sentence, reverse the words of the sentence.
 * For example,
 *
 * i/p = "i live in a house"
 * o/p = "house a in live i"
 *
 * i/p = " one two ";
 * o/p = " two one "
 *
 */

function appendToOutput(output, appender) {
  return `${output}${appender}`;
}

export default function reverseWordsBySpace(iStr) {
  // input validation
  if (!iStr || typeof iStr !== "string") {
    return "invalid input";
  }

  let end = iStr.length;
  let current = end - 1;
  let separator = " ";
  let output = "";
  while (current > 0) {
    // has space
    let c = iStr[current];
    if (c === separator) {
      let word = iStr.substring(current + 1, end);
      end = current;
      if (output.length > 0) {
        output = appendToOutput(output, separator);
      }
      output = appendToOutput(output, word);
    }
    // has no space
    --current;
  }

  // looping ended, add first word.
  let word = iStr.substring(current, end);
  if (output.length > 0) {
    output = appendToOutput(output, separator);
  }
  output = appendToOutput(output, word);

  return output;
}

// let resp = reverseWordsBySpace('i live in a house');
// resp = reverseWordsBySpace(' two one ');
// resp = reverseWordsBySpace(' i help');
// console.log(`--${resp}--`);
