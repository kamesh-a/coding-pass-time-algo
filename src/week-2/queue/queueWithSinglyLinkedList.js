const {
  SinglyLinkedList,
} = require("../../week-1/linkedList/singlyLinkedList");

class QueueWithSinglyLinkedList {
  constructor() {
    this.sll = new SinglyLinkedList();
  }

  enqueue(e) {
    this.sll.add(e);
  }

  dequeue() {
    return this.sll.remove().value;
  }

  add() {
    this.enqueue.apply(this, arguments);
  }

  remove() {
    return this.dequeue.apply(this, arguments);
  }

  size() {
    return this.sll.size;
  }
}

module.exports = {
  QueueBySLL: QueueWithSinglyLinkedList,
};
