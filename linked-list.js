/** Singly Linked List (minimal features for stack/queue composition) */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    /** push(val): add to end. Returns undefined. */
    push(val) {
      const newNode = new Node(val);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length += 1;
    }
  
    /** unshift(val): add to start. Returns undefined. */
    unshift(val) {
      const newNode = new Node(val);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
  
      this.length += 1;
    }
  
    /** shift(): remove from start, return value. Throw if empty. */
    shift() {
      if (!this.head) throw new Error("List is empty");
  
      const removed = this.head;
      this.head = this.head.next;
      this.length -= 1;
  
      if (this.length === 0) {
        this.tail = null;
      }
  
      return removed.val;
    }
  
    /** pop(): remove from end, return value. Throw if empty. */
    pop() {
      if (!this.head) throw new Error("List is empty");
  
      if (this.length === 1) {
        const val = this.head.val;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return val;
      }
  
      let curr = this.head;
      while (curr.next !== this.tail) {
        curr = curr.next;
      }
  
      const val = this.tail.val;
      curr.next = null;
      this.tail = curr;
      this.length -= 1;
  
      return val;
    }
  }
  
  module.exports = LinkedList;
  