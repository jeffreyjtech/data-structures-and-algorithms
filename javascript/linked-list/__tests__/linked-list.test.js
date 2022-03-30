'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List v1 tests (Code Challenge 05)', () => {
  let testLL = new LinkedList;

  // Creating semantic names for test values for debugging purposes

  let testValue1 = 12;
  let testValue2 = 13;
  let testValue3 = 67;

  it('Can successfully instantiate an empty linked list', () => {
    expect(testLL.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    testLL.insert(testValue1);

    expect(testLL.head).toBeTruthy();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    expect(testLL.head.value).toBe(testValue1);
    expect(testLL.head.next).toBeNull();
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    testLL.insert(testValue2);
    testLL.insert(testValue3);

    expect(testLL.head.value).toBe(testValue3);
    expect(testLL.head.next.value).toBe(testValue2);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(testLL.includes(testValue1)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(testLL.includes(569234678054)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let testString = `[${testValue3}] -> [${testValue2}] -> [${testValue1}] -> NULL`;

    expect(testLL.toString()).toBe(testString);
  });
});
