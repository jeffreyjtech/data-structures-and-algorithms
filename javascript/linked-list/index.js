'use strict';

class Node {
  constructor(value, next = null) {
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
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }

    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current !== null) {
      string += `[${current.value}] -> `;
      current = current.next;
    }
    return string + 'NULL';
  }

  insertBefore(searchValue, newValue) {
    if (this.head.value === searchValue) {
      this.head = new Node(newValue, this.head);
      return;
    }

    let current = this.head;
    while (current.next.value !== searchValue) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
  }

  insertAfter(searchValue, newValue) {
    let current = this.head;
    while (current.next !== null && current.value !== searchValue) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
  }
}

module.exports = LinkedList;
