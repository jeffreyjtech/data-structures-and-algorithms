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
    this.top = new Node(value, this.top)
  }

  pop() {
    let result;
    if(!this.isEmpty()){
      result = this.top.value;
      this.top = this.top.next;
    }
    return result;
  }

  isEmpty() {
    if(this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

let myFirstStack = new Stack;

myFirstStack.push(1);
myFirstStack.push(2);

console.log('Here\'s my stack:\n ', myFirstStack);

let pop = myFirstStack.pop();

console.log(`Now I\'ve popped \`${pop}\` off my stack:\n `, myFirstStack);

console.log(myFirstStack.isEmpty());

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

  dequeue(value) {
    let result;
    if (!this.isEmpty()) {
      if (this.front.next === null) {
        result = this.front.value;
        this.front = this.front.next;
        this.back = this.front;
      } else if (this.front.next !== null) {
        result = this.front.value;
        this.front = this.front.next;
      } 
    }
    return result;
  }

  isEmpty() {
    if(this.back === null && this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}

let myFirstQueue = new Queue;

myFirstQueue.enqueue(5);
myFirstQueue.enqueue(10);
myFirstQueue.enqueue(15);

console.log('Here\'s my queue:\n ',myFirstQueue);

let dequeue = myFirstQueue.dequeue();

console.log(`Now I\'ve dequeued \`${dequeue}\` off my queue:\n `, myFirstQueue);

let secondDequeue = myFirstQueue.dequeue();
let lastDequeue = myFirstQueue.dequeue();

console.log(`I can even dequeue the last node \`${lastDequeue}\` off my queue:\n `, myFirstQueue);

myFirstQueue.dequeue();
