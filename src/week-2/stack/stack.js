class Stack {
  constructor(size = 0) {
    this.items = size ? new Array(size) : [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pop() {
    return this.items.pop();
  }

  push(e) {
    return this.items.push(e);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  toString() {
    return this.items.join(",");
  }
}

module.exports = { Stack };
