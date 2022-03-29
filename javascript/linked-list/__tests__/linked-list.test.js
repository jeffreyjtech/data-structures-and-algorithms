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

describe('Linked List v2 tests (Code Challenge 06)', () => {
  let testLL = new LinkedList;

  // Creating semantic names for test values for debugging purposes

  let append1 = 25;
  let search1 = append1;
  let append2 = 29;
  let search2 = append2;
  let append3 = 57;
  let insertBefore1 = 49;
  let insertBefore2 = 124;
  let insertAfter1 = 126;

  it('Can successfully add a node to the end of the linked list', () => {
    testLL.append(append1);

    expect(testLL.head.value).toBe(append1);
    expect(testLL.head.next).toBe(null);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    testLL.append(append2);
    testLL.append(append3);

    expect(testLL.head.next.value).toBe(append2);
    expect(testLL.head.next.next.value).toBe(append3);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    testLL.insertBefore(search2, insertBefore1);

    expect(testLL.head.next.value).toBe(insertBefore1);
    expect(testLL.head.next.next.value).toBe(append2);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    testLL.insertBefore(search1, insertBefore2);

    expect(testLL.head.value).toBe(insertBefore2);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    testLL.insertAfter(search1, insertAfter1);

    expect(testLL.head.next.next.value).toBe(insertAfter1);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let freshTestLL = new LinkedList;

    freshTestLL.append(2);
    freshTestLL.append(4);

    freshTestLL.insertAfter(4, 8);

    expect(freshTestLL.head.next.next.value).toBe(8);
  });
});
