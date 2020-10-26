/**
 * Sample queue with iterator method
 */

const { QueueBySLL } = require("./queueWithSinglyLinkedList");

let queue = new QueueBySLL();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
queue.add(6);
queue.add(7);

for (const iterator of queue) {
  console.log(iterator);
}

console.log("---------------");

for (const iterator of queue) {
  console.log(iterator);
}
