class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  add(e) {
    if (e) {
      const node = new Node(e);
      if (!this.head) {
        this.head = node;
      }

      if (this.tail) {
        this.tail.next = node;
      }

      this.tail = node;
      this.size++;
    }
  }

  remove() {
    if (this.head) {
      const removeNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removeNode;
    }

    throw new Error("Linked list is empty");
  }

  removeOccurence(e) {
    if (e) {
      // finding previous node.
      let prevNode = null;
      let node = this.head;
      while (node) {
        let value = node.value;
        if (value == e) {
          if (this.head == node) {
            this.head = this.next;
          }

          if (this.tail == node) {
            this.tail = prevNode;
          }

          if (prevNode != null) {
            prevNode.next = node.next;
          }

          this.size--;
        }

        prevNode = node;
        node = node.next;
      }
    }
  }

  find(e) {
    let node = this.head;
    while (node) {
      if (node.value == e) {
        return node;
      }
      node = node.next;
    }
  }
}

class Node {
  constructor(v, n) {
    this.value = v;
    this.next = n;
  }

  getNext() {
    return this.next;
  }

  setNext(e) {
    this.next = e;
  }

  getValue() {
    return this.value;
  }

  toString() {
    return `${this.value}-${this.next}`;
  }
}

// var sl = new SinglyLinkedList();
// sl.add(1);
// sl.add(2);
// sl.add(3);
// sl.add(4);
// console.log(sl);
// console.log(sl.size);
// console.log(sl.find(3));
// console.log(sl.removeOccurence(3));
// console.log(sl.find(3));
// console.log(sl.size);

module.exports = {
  SinglyLinkedList,
};
