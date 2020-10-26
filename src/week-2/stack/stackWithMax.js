/**
 * https://interviewcamp.io/courses/interview-academy/lectures/3311859
 *
 * Idea: To have a max value with Stack
 *
 * Having two stack one for original stack, another to keep the max value at any moment.
 */

const { Stack } = require("./stack");

class StackWithMax {
  constructor() {
    this.orginal = new Stack();
    this.max = new Stack();
  }

  push(e) {
    if (typeof e != undefined) {
      this.orginal.push(e);

      if (this.max.isEmpty() || e >= this.max.peek()) {
        this.max.push(e);
      }
    }
  }

  max() {
    if (this.max.isEmpty()) {
      throw new Error("Max stack is empty, can't get the max");
    }

    return this.max.peek();
  }

  pop() {
    if (this.max.isEmpty()) {
      throw new Error("Max stack is empty, can't pop()");
    }

    let top = this.orginal.pop();

    if (this.max.peek() === top) {
      this.max.pop();
    }

    return top;
  }

  toString() {
    console.log(`original`, this.orginal.toString());
    console.log(`max: `, this.max.toString());
  }
}

const stack = new StackWithMax();
stack.push(3);
stack.push(1);
stack.push(2);
stack.push(0);
stack.push(4);
stack.push(7);
stack.push(8);
stack.toString();
stack.pop(); // 8 gone
stack.toString();
stack.pop(); // 7 gone
stack.toString();
stack.pop(); // 4 gone
stack.toString();
stack.pop(); // 0 gone, 3 is max
stack.toString();
