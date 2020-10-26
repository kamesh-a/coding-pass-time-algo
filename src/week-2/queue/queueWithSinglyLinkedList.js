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

  peek() {
    const node = this.sll.head;
    return node ? node.value : null;
  }

  [Symbol.iterator]() {
    let node = this.sll.head;

    return {
      next() {
        // next function.
        if (node) {
          const value = node.value;
          const done = node.value ? false : true;
          node = node.next;
          return { value, done };
        }
        return { value: null, done: true };
      },
    };
  }
}

module.exports = {
  QueueBySLL: QueueWithSinglyLinkedList,
};
