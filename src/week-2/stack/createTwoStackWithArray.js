/**
 * https://interviewcamp.io/courses/interview-academy/lectures/3311858
 *
 * Use an array to create two stacks
 *
 * Idea: one from front, another from end.
 *
 * When they meet each other we ran out of space.
 */

class StackImplmentationWithArray {
  constructor(sizeOfArray) {
    console.log(`Stack with Array`);
    this._internalArray = new Array(sizeOfArray);
    this.s1 = 0;
    this.s2 = this._internalArray.length - 1;
  }

  push(stackNumber, item) {
    if ([1, 2].includes(stackNumber)) {
      if (this.s1 > this.s2) {
        throw new Error("stack is full");
      }

      if (stackNumber === 1 && this.s1 < this.s2) {
        this._internalArray[this.s1++] = item;
      } else if (stackNumber === 2 && this.s2 >= this.s1) {
        this._internalArray[this.s2--] = item;
      }
      console.log(this._internalArray);
      return item;
    }

    throw new Error("stack number should be 1 or 2");
  }

  pop(stackNumber) {
    if ([1, 2].includes(stackNumber)) {
      if (stackNumber === 1 && this.s1 > 0) {
        this.s1--;
      } else if (stackNumber === 2 && this.s2 < this._internalArray.length) {
        this.s2++;
      }
    }
    throw new Error("stack number should be 1 or 2");
  }

  toString() {
    return this._internalArray.join(",");
  }
}

const stack = new StackImplmentationWithArray(5);
stack.push(1, 0);
stack.push(2, 1);
stack.push(1, 2);
stack.push(2, 3);
stack.push(2, 4);
console.log(stack.toString());
