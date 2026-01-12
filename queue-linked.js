const LinkedList = require("./linked-list");

/** Queue implemented via composition with a LinkedList */
class QueueLinked {
  constructor() {
    this._list = new LinkedList();
  }

  enqueue(val) {
    this._list.push(val);
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is empty");
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

module.exports = QueueLinked;
