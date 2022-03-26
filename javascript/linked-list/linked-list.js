'use strict';

class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse(callback) {
    let current = this.head;
    while (current !== null) {
      callback(current.value);
      current = current.next;
    }
  }

  insert(value) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next; 
    }
    current.next = new Node(value);
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let current = this.head;
    while (current.value !== value) {
      if (current.next === null) {
        return false;
      } else {
        current = current.next;
      }
    }

    return true;
  }
}

let newLL = new LinkedList();

newLL.prepend(14);
newLL.prepend(12);
newLL.insert(-13);

newLL.traverse(console.log);

console.log(newLL.includes(0));
