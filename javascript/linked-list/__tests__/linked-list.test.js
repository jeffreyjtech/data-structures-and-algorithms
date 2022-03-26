'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  let testLL = new LinkedList;

  it('Can successfully instantiate an empty linked list', () => {
    expect(testLL.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    testLL.insert(12);

    expect(testLL.head).toBeTruthy();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    expect(testLL.head.value).toBe(12);
    expect(testLL.head.next).toBeNull();
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    testLL.insert(13);
    testLL.insert(67);

    expect(testLL.head.value).toBe(67);
    expect(testLL.head.next.value).toBe(13);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(testLL.includes(12)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(testLL.includes(569234678054)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let testString = `[${67}] -> [${13}] -> [${12}] -> NULL`;

    expect(testLL.toString()).toBe(testString);
  });
});
