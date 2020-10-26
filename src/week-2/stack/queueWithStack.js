/**
 * https://interviewcamp.io/courses/interview-academy/lectures/3311858
 *
 * constructing an Queue with stack
 *
 * Idea:
 *  1. Create a stack one
 *  2. Create a stack two
 *
 *  enqueue => push into stack-2 from stack-1
 *  dequeue => pop from stack-2
 *
 *  TimeComplexity O(n) dequeue as one point we have push all items from S1 -> S2
 *
 */

const { Stack } = require("./stack");

class StackEmptyException extends Error {
  constructor() {
    super("StackEmptyException");
    this.name = this.constructor.name;
  }
}

class QueueBasedOnStack {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
    this.pushToStack1();
    this.pushToStack2();
  }

  pushToStack1() {
    this.enqueue(1);
    this.enqueue(2);
    this.enqueue(3);
    this.enqueue(4);
  }

  pushToStack2() {
    this.s2.push(0);
    this.s2.push(-1);
  }

  enqueue(element) {
    this.s1.push(element);
  }

  dequeue() {
    if (this.s2.isEmpty()) {
      this.flushToS2();
    }

    if (this.s1.isEmpty() && this.s2.isEmpty()) {
      throw new StackEmptyException();
    }

    return this.s2.pop();
  }

  flushToS2() {
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }
  }
}

const qBasedStack = new QueueBasedOnStack();

console.log(qBasedStack.dequeue());
console.log(qBasedStack.dequeue());
console.log(qBasedStack.dequeue());
console.log(qBasedStack.dequeue());
console.log(qBasedStack.dequeue());
console.log(qBasedStack.dequeue());
try {
  console.log(qBasedStack.dequeue()); // should throw
} catch (e) {
  if (e instanceof StackEmptyException) {
    console.log(`Yes, dequeue finished with error !!!`);
  }
}
