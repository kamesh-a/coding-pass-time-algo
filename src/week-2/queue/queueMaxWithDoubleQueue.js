/**
 * https://interviewcamp.io/courses/interview-academy/lectures/3312057
 *
 * Idea:
 *  - We keep two queue
 *      - one is max queue
 *      - other is normal main queue which contains all elements
 *
 *  - Add/enqueue
 *      - During insertions into max queue, check the last element
 *        lesser than the element to be added if so remove it.
 *
 *  - Remove/dequeue
 *      - During deletion, main queue top element is max queue top elememtn
 *        remove them both.
 *
 *  Time Complexity
 *  - Deletion O(1) as we are removing from front of queue.
 *
 *  - Addition O(n) worst case
 */

const { QueueByDLL } = require("./queueWithDoublyLinkedList");

class QueueWithMax {
  constructor() {
    this.main = new QueueByDLL();
    this.max = new QueueByDLL();
  }

  enqueue() {
    this.add.apply(this, arguments);
  }

  dequeue() {
    this.delete.apply(this, arguments);
  }

  add(no) {
    console.log(`add to the tail : ${no}`);
    this.main.add(no);
    console.log(
      `last max: ${this.max.getLast()}, isEmpty: ${this.max.isEmpty()}`
    );
    while (
      !this.max.isEmpty() &&
      this.max.getLast() &&
      this.max.getLast() < no
    ) {
      // Removes element from the back, when element is deleted we can
      // Check the pointer in the top next to get the max.
      console.log(`Element which got removed: `, this.max.removeLast());
    }
    this.max.add(no);
  }

  delete() {
    if (this.main.isEmpty()) {
      throw new Error("Main queue is empty");
    }
    const no = this.main.getFirst();
    // console.log(
    //   `First: ${this.main.getFirst()}, isEmpty: ${this.main.isEmpty()}`
    // );
    this.main.remove();
    // console.log(
    //   `First max: ${this.max.getFirst()}, isEmpty: ${this.max.isEmpty()}`
    // );
    if (this.max.getFirst() === no) {
      this.max.remove();
    }
  }

  maximum() {
    return this.max.getFirst();
  }
}

let queueWithMax = new QueueWithMax();
// 4 -> 10 -> 2 ( del )
// 4 -> 10
queueWithMax.enqueue(2);
queueWithMax.enqueue(10);
queueWithMax.enqueue(4);
queueWithMax.dequeue(); // 2 removed, no max
queueWithMax.dequeue(); // 10 removed, 10 max removed too.
console.log(`${queueWithMax.maximum()} === 4`);
console.log(`-----------------------------------`);
let queueWithMax_two = new QueueWithMax();
queueWithMax_two.enqueue(2);
queueWithMax_two.enqueue(10); // 2 removed from max
queueWithMax_two.enqueue(10);
queueWithMax_two.enqueue(5);
queueWithMax_two.enqueue(4);
queueWithMax_two.enqueue(6); // 4,5 removed from max
queueWithMax_two.enqueue(8); // 6 removed from max
// max should contain 10,10,8
queueWithMax_two.delete(); // 2 deleted from main, nothing from max
queueWithMax_two.delete(); // 10 deleted from main, 10 from max
console.log(`${queueWithMax_two.maximum()} === 10`);
queueWithMax_two.delete(); // 10 deleted from main, 10 from max
queueWithMax_two.delete(); // 5 deleted from main, nothing from max
queueWithMax_two.delete(); // 4 deleted from main, nothing from max
queueWithMax_two.delete(); // 6 deleted from main, nothing from max
console.log(`${queueWithMax_two.maximum()} === 8`);
