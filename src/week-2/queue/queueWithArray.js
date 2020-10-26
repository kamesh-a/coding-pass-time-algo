/**
 * https://interviewcamp.io/courses/101687/lectures/3312056
 *
 * Idea: Create a queue with Arrays
 * - Create an array with size
 * - Added front, back and length pointers for manipulation
 * - We are using circular array to re-use the space.
 *
 */

class QueueWithArray {
  constructor(size) {
    this.arr = new Array(size);
    this.front = 0;
    this.back = 0;
    this.length = 0;
  }

  enqueue() {
    return this.add.apply(this, arguments);
  }

  dequeue() {
    return this.dequeue.apply(this, arguments);
  }

  add(e) {
    if (length === this.arr.length) {
      throw new QueueFullException();
    }

    this.arr[this.back] = e;
    this.back = (this.back + 1) % this.arr.length;
    this.length++;
  }

  remove() {
    if (length === 0) {
      throw new QueueEmptyException();
    }

    const result = this.arr[this.front];
    this.front = (this.front + 1) % this.arr.length;
    this.length--;
    return result;
  }
}

class QueueFullException extends Error {
  constructor() {
    super();
    this.message = "Queue is full";
  }
}

class QueueEmptyException extends Error {
  constructor() {
    super();
    this.message = "Queue is empty";
  }
}

const queueArray = new QueueEmptyException(4);
queueArray.enqueue(1);
queueArray.add(2);
queueArray.add(3);
queueArray.dequeue(); // 1 should come out, front = 1-index
queueArray.dequeue(); // 2 should come out, front = 2-index
queueArray.add(4);
queueArray.add(5);
queueArray.add(6);
