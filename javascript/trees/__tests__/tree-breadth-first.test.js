'use strict';

const { Tree, Node, breadthFirst } = require('../index');

describe('Testing breadthFirst function', () => {
  let testTree = new Tree();

  test('Throws an error on an empty tree', () => {
    expect(() => breadthFirst(testTree)).toThrowError();
  });

  test('Returns the single node of a one-node tree', () => {
    testTree.root = new Node(49);

    expect(breadthFirst(testTree)).toEqual([49]);
  });

  test('Returns the nodes of a 2-level tree', () => {
    testTree.root.right = new Node(64);
    testTree.root.left = new Node(36);

    expect(breadthFirst(testTree)).toEqual([49,36,64]);
  });

  test('Returns the nodes of a 3-level tree', () => {
    testTree.root.right.right = new Node(81);
    testTree.root.right.left = new Node(25);

    expect(breadthFirst(testTree)).toEqual([49,36,64,25,81]);
  });

  test('Returns the nodes of a 4-level tree', () => {
    testTree.root.right.right.left = new Node(100);

    expect(breadthFirst(testTree)).toEqual([49,36,64,25,81,100]);
  });
});
