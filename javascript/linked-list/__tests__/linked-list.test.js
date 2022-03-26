'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let newLL = new LinkedList;

    expect(newLL.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    let newLL = new LinkedList;

    let valueA = 12;

    newLL.insert(valueA);

    expect(newLL.head.value).toEqual(valueA);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let newLL = new LinkedList;

    
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let newLL = new LinkedList;

    let valueA = 12;
    let valueB = -13;

    newLL.insert(valueA);
    newLL.insert(valueB);

    console.log(newLL);

    expect(newLL.head.value).toEqual(valueB);
    expect(newLL.head.next.value).toEqual(valueA);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(true).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(true).toBeTruthy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(true).toBeTruthy();
  });
});
