'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List v3 tests (Code Challenge 07)', () => {
  let testLL = new LinkedList;
  let value1 = 12;
  let value2 = 13;
  let value3 = 14;
  testLL.append(value1);
  testLL.append(value2);
  testLL.append(value3);
  testLL.reverse();

  it('Where k is greater than the length of the linked list', () => {
    let k = 4;

    testLL.kthFromEnd(k);
  });

  it('Where k and the length of the list are the same', () => {
    let k = 3;

    testLL.kthFromEnd(k);
  });

  it('Where k is not a positive integer', () => {
    let k = -3;

    testLL.kthFromEnd(k);
  });

  it('Where the linked list is of a size 1', () => {
    let oneNodeLL = new LinkedList;
    oneNodeLL.insert(10);

    let k = 1;

    oneNodeLL.kthFromEnd(k);
  });

  it('Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let k = 2;

    testLL.kthFromEnd(k);
  });
});
