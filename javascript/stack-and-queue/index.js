'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new Node(value, this.top);
  }

  pop() {
    let result = this.top.value;
    this.top = this.top.next;
    return result;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    if(this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    if(this.isEmpty()) {
      this.front = new Node(value, this.back);
      this.back = this.front;
    } else {
      this.back.next = new Node(value);
      this.back = this.back.next;
    }
  }

  dequeue() {
    let result;
    if (this.front.next === null) {
      result = this.front.value;
      this.front = this.front.next;
      this.back = this.front;
    } else if (this.front.next !== null) {
      result = this.front.value;
      this.front = this.front.next;
    }
    return result;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    if(this.back === null && this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  Queue,
  Stack
};
