/**
 * TODO:
 *
 * Doubly linked list : (head) [p|v|n] -> [p|v|n] -> [p|v|n] (tail)
 *
 * Size : maintains length of linked list.
 *
 * add: to the last
 * remove: from the front
 *
 * i.e. FIFO
 */
const {
  DoublyLinkedList,
} = require("../../week-1/linkedList/doublyLinkedList");

class QueueWithDoublyLinkedList {
  constructor() {
    console.log("Creating an doubly linked list");
    this.linkedList = new DoublyLinkedList();
  }

  enqueue() {
    this.add.apply(this, arguments);
  }

  isEmpty() {
    return this.linkedList.isEmpty();
  }

  dequeue() {
    this.remove.apply(this, arguments);
  }

  add(e) {
    // Adds element to it's tail
    this.linkedList.add(e);
  }

  addFirst(e) {
    // Adds element to it's head
    this.linkedList.addFirst(e);
  }

  peek() {
    const node = this.linkedList.head;
    return node ? node.value : null;
  }

  getFirst() {
    return this.peek.call(this);
  }

  getLast() {
    const node = this.linkedList.tail;
    return node ? node.value : null;
  }

  remove() {
    // Removes element from it's head
    return this.linkedList.remove();
  }

  removeLast() {
    // Removes element from it's tail
    return this.linkedList.removeLast();
  }

  removeOccurence(e) {
    // Removes first occurence element by traversing head -> tail
    return this.linkedList.remove(e);
  }

  removeLastOccurence(e) {
    // Removes last occurence element by traversing tail -> head
    this.linkedList.removeLast(e);
  }

  [Symbol.iterator]() {
    let node = this.linkedList.head;

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

  print() {
    this.linkedList.print();
  }

  size() {
    return this.linkedList.length;
  }
}

module.exports = {
  QueueByDLL: QueueWithDoublyLinkedList,
};
