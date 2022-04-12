'use strict';

const { Tree, Node, SearchTree } = require('../index');

describe('Testing the Tree class', () => {
  let testTree;

  test('Can successfully instantiate an empty tree', () => {
    testTree = new Tree();
    expect(testTree.root).toBe(null);
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    testTree.root = new Node('hello');

    expect(testTree.root.value).toBe('hello');
    expect(testTree.root.left).toBe(null);
    expect(testTree.root.right).toBe(null);
  });

  test('Can successfully return a collection from a preorder traversal', () => {
    testTree.root.right = new Node('hi there');
    testTree.root.left = new Node('greetings');
    testTree.root.right.right = new Node('hey');

    expect(testTree.preOrder()).toEqual(['hello', 'greetings', 'hi there', 'hey']);
  });

  test('Can successfully return a collection from a inorder traversal', () => {
    expect(testTree.inOrder()).toEqual(['greetings', 'hello', 'hi there', 'hey']);
  });

  test('Can successfully return a collection from a postorder traversal', () => {
    expect(testTree.postOrder()).toEqual(['greetings', 'hey', 'hi there', 'hello']);
  });
});

describe('Testing the Binary Tree class', () => {
  let testSearchTree = new SearchTree();

  test('Can successfully add a left child and right child properly to a node', () => {
    testSearchTree.add(5);
    testSearchTree.add(4);
    testSearchTree.add(6);

    expect(testSearchTree.root.value).toBe(5);
    expect(testSearchTree.root.right.value).toBe(6);
    expect(testSearchTree.root.left.value).toBe(4);
  });

  test('contains() method returns true if value exists', () => {
    expect(testSearchTree.contains(6)).toBe(true);
  });

  test('contains() method returns false if value does not exist', () => {
    expect(testSearchTree.contains(45327698)).toBe(false);
  });
});
