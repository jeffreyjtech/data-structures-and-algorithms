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
    this.length = 0;
  }

  traverse(callback) {
    let current = this.head;
    while (current !== null) {
      callback(current.value);
      current = current.next;
    }
  }

  append(value) {
    this.length++;
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

  /*
  INSERT METHODS
  */

  insert(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  insertBefore(value, newValue) {
    this.length++;
    if (this.head.value === value) {
      this.head = new Node(newValue, this.head);
      return;
    }

    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current.next !== null && current.value !== value) {
      current = current.next;
    }
    current.next = new Node(newValue, current.next);
    this.length++;
  }

  /*
  Kth FROM END METHODs
  */

  kthFromEnd(k) {
    /*
      Return the node’s value that is k places from the tail of the linked list.
      You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
    */

    let result = null;
    let current = this.head;
    while (k <= this.length && k > 0) {
      result = current.value;
      current = current.next;
      k++;
    }
    return result;
  }
}

function reverse(oldLL) {
  let newLL = new LinkedList;
  let current = oldLL.head; // Set head as starting position
  while (current !== null) {
    newLL.insert(current.value);
    current = current.next;
  }
  return newLL;
}

function zipLists(list1, list2) {
  let newList = new LinkedList;
  let currentList = list1;
  let otherList = list2;
  if( list1.head === null ){
    currentList = list2;
    otherList = list1;
  }
  let current = currentList.head;
  while (list1.head !== null || list2.head !== null) {
    newList.append(current.value);
    currentList.head = currentList.head.next;
    currentList.length--;
    if (otherList.head !== null) {
      current = otherList.head;
      let tmp = currentList;
      currentList = otherList;
      otherList = tmp;
    } else {
      current = currentList.head;
    }
  }

  return newList;
}

module.exports = {
  LinkedList,
  reverse,
  zipLists,
};
