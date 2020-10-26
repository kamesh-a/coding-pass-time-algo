/**
 * Find target in Stack.
 *
 * https://interviewcamp.io/courses/interview-academy/lectures/3311741
 * Time Complexity O(n)
 */

const { Stack } = require("./stack");

function findAnElementInStack(e, stack) {
  if (e && stack) {
    let found = false;
    const tempStack = new Stack();
    while (!stack.isEmpty()) {
      let currentElement = stack.pop();
      tempStack.push(currentElement);
      if (currentElement === e) {
        found = true;
        break;
      }
    }

    console.log(`original stack remaining : ` + stack.toString());
    console.log(`temp stack contains : ` + tempStack.toString());

    while (!tempStack.isEmpty()) {
      stack.push(tempStack.pop());
    }

    console.log(`original stack repopulated : ` + stack.toString());
    return found;
  }
}

const input = new Stack();
input.push(1);
input.push(2);
input.push(3);
input.push(4);

console.log(
  `Did we found element[${3}] in stack :: ` + findAnElementInStack(3, input)
);
