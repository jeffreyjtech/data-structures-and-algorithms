'use strict';

// Require our linked list implementation
const { LinkedList } = require('../index');

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
