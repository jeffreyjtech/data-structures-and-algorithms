'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List v1 tests (Code Challenge 05)', () => {
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

describe('Linked List v2 tests (Code Challenge 06)', () => {
  let testLL = new LinkedList;

  it('Can successfully add a node to the end of the linked list', () => {
    testLL.append(25);

    expect(testLL.head.value).toBe(25);
    expect(testLL.head.next).toBe(null);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    testLL.append(29);
    testLL.append(57);

    expect(testLL.head.next.value).toBe(29);
    expect(testLL.head.next.next.value).toBe(57);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    testLL.insertBefore(29, 49);

    expect(testLL.head.next.value).toBe(49);
    expect(testLL.head.next.next.value).toBe(29);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    testLL.insertBefore(25, 124);

    expect(testLL.head.value).toBe(124);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    testLL.insertAfter(25, 126);

    expect(testLL.head.next.next.value).toBe(126);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let freshTestLL = new LinkedList;

    freshTestLL.append(2);
    freshTestLL.append(4);

    freshTestLL.insertAfter(4, 8);

    expect(freshTestLL.head.next.next.value).toBe(8);
  });
});
