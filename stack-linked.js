const LinkedList = require("./linked-list");

/** Stack implemented via composition with a LinkedList */
class StackLinked {
  constructor() {
    this._list = new LinkedList();
  }

  push(val) {
    this._list.unshift(val);
  }

  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this._list.shift();
  }

  peek() {
    return this.isEmpty() ? null : this._list.head.val;
  }

  isEmpty() {
    return this._list.length === 0;
  }

  get size() {
    return this._list.length;
  }
}

module.exports = StackLinked;
