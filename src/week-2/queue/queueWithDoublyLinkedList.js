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

  remove() {
    // Removes element from it's head
    this.linkedList.remove();
  }

  removeLast() {
    // Removes element from it's tail
    this.linkedList.removeLast();
  }

  removeOccurence(e) {
    // Removes first occurence element by traversing head -> tail
    this.linkedList.remove(e);
  }

  removeLastOccurence(e) {
    // Removes last occurence element by traversing tail -> head
    this.linkedList.removeLast(e);
  }

  size() {
    return this.linkedList.length;
  }
}

module.exports = {
  QueueByDLL: QueueWithDoublyLinkedList,
};
