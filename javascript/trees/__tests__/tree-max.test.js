'use strict';

const { Tree, Node } = require('../index');

describe('Testing the findMaxValue() method', () => {
  let testTree = new Tree();

  test('Throws a semantic error if tree is empty', () => {
    expect(() => testTree.findMaxValue()).toThrow(Error('Method failed because tree is empty'));
  });

  test('Can find the single value in a single-node tree', () => {
    testTree.root = new Node(5);

    expect(testTree.findMaxValue()).toBe(5);
  });

  test('Can find the max value in a small tree', () => {
    testTree.root.right = new Node(4);
    testTree.root.left = new Node(6);
    testTree.root.right.right = new Node(10);

    expect(testTree.findMaxValue()).toBe(10);
  });

  test('Can find a new max value after adding a new value', () => {
    testTree.root.left.right = new Node(15);

    expect(testTree.findMaxValue()).toBe(15);
  });

  test('Find the same max value if new number is lower than max', () => {
    testTree.root.left.right.left = new Node(5);

    expect(testTree.findMaxValue()).toBe(15);
  });

});
