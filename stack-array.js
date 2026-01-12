/** Stack implemented with an array */
class StackArray {
    constructor() {
      this._arr = [];
    }
  
    push(val) {
      this._arr.push(val);
    }
  
    pop() {
      if (this.isEmpty()) throw new Error("Stack is empty");
      return this._arr.pop();
    }
  
    peek() {
      return this.isEmpty() ? null : this._arr[this._arr.length - 1];
    }
  
    isEmpty() {
      return this._arr.length === 0;
    }
  
    get size() {
      return this._arr.length;
    }
  }
  
  module.exports = StackArray;
  