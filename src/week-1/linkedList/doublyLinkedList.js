/**
 * Directions:
 *  - front
 *  - back
 *  - head
 *  - tail
 *
 *  [prev| value |next] <-> [prev| value |next] <-> [prev| value |next]
 *
 *  back -> [ n | n | n | n | n ] -> front (queue);
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  add(e) {
    if (e) {
      const node = new Node(e);
      if (!this.head) {
        this.head = node;
      }

      if (this.tail) {
        this.tail.next = node;
        node.prev = this.tail;
      }

      this.tail = node;
      this.length++;
    }
  }

  addFirst(e) {
    if (e) {
      const node = new Node(e);
      if (!this.head) {
        this.head = node;
      }

      if (!this.tail) {
        this.tail = node;
      }

      if (this.head && this.head != node) {
        const currentHead = this.head;
        node.next = currentHead;
        currentHead.prev = node;
        this.head = node;
      }

      this.length++;
    }
  }

  _remove(targetNode) {
    if (targetNode) {
      if (targetNode == this.head) {
        const nextNode = this.head.next;
        this.head = nextNode;
        nextNode.prev = null;
      }

      if (targetNode == this.tail) {
        const prevNode = this.tail.prev;
        this.tail = prevNode;
        prevNode.next = null;
      }

      const next = targetNode.next;
      const prev = targetNode.prev;
      if (prev) {
        prev.next = next;
      }

      this.length--;
    }
  }

  _removeTail() {
    if (this.tail) {
      const prev = this.tail.prev;
      const removedNode = this.tail;
      this.tail = prev;
      if (prev) {
        prev.next = null;
      }
      return removedNode;
    }
  }

  _removeFront() {
    if (this.head) {
      const next = this.head.next;
      const removedNode = this.head;
      this.head = next;
      if (next) {
        next.prev = null;
      }
      return removedNode;
    }
  }

  remove(e) {
    if (e) {
      let targetNode = this.find(e);
      return this._remove(targetNode);
    } else {
      return this._removeFront();
    }
  }

  removeLast(e) {
    if (e) {
      let targetNode = this.findLast(e);
      return this._remove(targetNode);
    } else {
      return this._removeTail();
    }
  }

  findLast(e) {
    if (e) {
      let node = this.tail;
      while (node) {
        if (node.value === e) {
          return node;
        }
        node = node.prev;
      }
    }
  }

  find(e) {
    if (e) {
      let node = this.head;
      while (node) {
        if (node.value === e) {
          return node;
        }
        node = node.next;
      }
    }
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(`[${node.value}]`);
      node = node.next;
    }
  }
}

class Node {
  constructor(e) {
    this.value = e;
    this.prev = null;
    this.next = null;
  }
}

// var dl = new DoublyLinkedList();
// dl.add(1);
// dl.add(2);
// dl.add(3);
// dl.add(4);
// // console.log(dl);
// console.log(dl.length);
// dl.print();
// // console.log(dl.remove(2));
// console.log(dl.remove(1));
// console.log(dl.head);
// console.log(dl.tail);
// dl.print();
// console.log(dl.length);

module.exports = {
  DoublyLinkedList,
};
