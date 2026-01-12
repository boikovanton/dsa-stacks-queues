/** Queue implemented with an array + head index (fast dequeues) */
class QueueArray {
    constructor() {
      this._arr = [];
      this._head = 0;
    }
  
    enqueue(val) {
      this._arr.push(val);
    }
  
    dequeue() {
      if (this.isEmpty()) throw new Error("Queue is empty");
  
      const val = this._arr[this._head];
      this._head += 1;
  
      // cleanup occasionally so array doesn't grow forever
      if (this._head > 50 && this._head * 2 > this._arr.length) {
        this._arr = this._arr.slice(this._head);
        this._head = 0;
      }
  
      return val;
    }
  
    peek() {
      return this.isEmpty() ? null : this._arr[this._head];
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    get size() {
      return this._arr.length - this._head;
    }
  }
  
  module.exports = QueueArray;
  