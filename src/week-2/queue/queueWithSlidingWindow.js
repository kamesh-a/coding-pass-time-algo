/**
 * https://interviewcamp.io/courses/interview-academy/lectures/3312058
 *
 * Idea: use a linked list implementation of queue.
 *
 * window size : 3
 *  queue : ( back - addition ) [ N ... | 2 | 1] ( front - removal )
 *
 * - If window size in not excess add the values and print the sum
 * - If window size in excess remove the value from sliding window & sum , add the new entry and print the value.
 */

const { QueueBySLL } = require("./queueWithSinglyLinkedList");

function slidingWindow(iArr, windowSize) {
  const queue = new QueueBySLL();
  let sum = 0;
  for (let index = 0; index < iArr.length; index++) {
    const e = iArr[index];
    if (queue.size() === windowSize) {
      const value = queue.remove(); // removes element from front of queue
      console.log(`V: ${value} :size: ${queue.size()} `);
      sum = sum - value;
    }

    queue.add(e);
    console.log(e, "---", queue.size());
    sum = sum + e;

    if (queue.size() === windowSize) {
      console.log(`Queue sum : ${sum}`);
    }
  }
}

slidingWindow([1, 2, 3, 4, 5, 6, 7, 8], 3);
