'use strict';

const { Tree, Node } = require('../trees');
const treeIntersection = require('./tree-intersection');

describe('Testing treeIntersection function', () => {

  let tree1 = new Tree();
  let tree2 = new Tree();

  test('Returns correct output with one-node trees', () => {
    tree1.root = new Node(10);
    tree2.root = new Node(10);

    const result = treeIntersection(tree1, tree2);
    expect(result).toStrictEqual([10]);
  });

  test('Returns correct output with 3-node trees', () => {
    tree1.root.right = new Node(30);
    tree1.root.left = new Node(6);
    tree2.root.right = new Node(40);
    tree2.root.left = new Node(6);

    const result = treeIntersection(tree1, tree2);
    expect(result).toStrictEqual([10, 6]);
  });

  test('Returns correct output with trees of different sizes', () => {
    tree1.root.right.right = new Node(40);
    tree1.root.right.left = new Node(10214);

    const result = treeIntersection(tree1, tree2);
    expect(result).toStrictEqual([10, 6, 40]);
  });
});
