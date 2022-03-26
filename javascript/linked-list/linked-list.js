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

  append(value) {

    let current = this.head;

    while (current.next !== null) {
      current = current.next; 
    }

    current.next = new Node(value);
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }
}

let ll = new LinkedList();

ll.prepend(14);
ll.prepend(12);
ll.append(-13);

console.log(ll);

ll.traverse(console.log);
