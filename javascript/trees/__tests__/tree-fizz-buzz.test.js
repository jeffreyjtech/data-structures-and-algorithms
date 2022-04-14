'use strict';

let { KaryNode, KaryTree, fizzBuzzTree } = require('../k-ary-tree');

describe('Testing K-aryTree class', () => {
  let testKTree;

  test('Can instantiate an empty KaryTree', () => {
    testKTree = new KaryTree();

    expect(testKTree.root).toBe(null);
  });

  test('Can add a KaryNode to KaryTree', () => {
    testKTree.root = new KaryNode(6);

    expect(testKTree.root.value).toBe(6);
    expect(testKTree.root.children).toEqual([]);
  });

  test('Can add children to KaryNode in KaryTree', () => {
    testKTree.root.children = [
      new KaryNode(12),
      new KaryNode(18),
      new KaryNode(24)
    ];

    expect(testKTree.root.children[0].value).toBe(12);
    expect(testKTree.root.children[1].value).toBe(18);
    expect(testKTree.root.children[2].value).toBe(24);
  });
});

describe('Testing FizzBuzz function', () => {
  let testKTree = new KaryTree();
  testKTree.root = new KaryNode(6);

  test('Can FizzBuzz a KaryTree with one node', () => {
    let newKTree = fizzBuzzTree(testKTree);

    expect(newKTree.root.value).toBe('Fizz');
  });

  test('Can FizzBuzz a KaryTree with one node with 3 children', () => {
    testKTree.root.children = [
      new KaryNode(12),
      new KaryNode(18),
      new KaryNode(24)
    ];

    let newKTree = fizzBuzzTree(testKTree);

    expect(newKTree.root.children[0].value).toBe('Fizz');
    expect(newKTree.root.children[1].value).toBe('Fizz');
    expect(newKTree.root.children[2].value).toBe('Fizz');
  });

  test('Can FizzBuzz a 3-level KaryTree', () => {

    testKTree.root.children[0].children = [
      new KaryNode(30),
      new KaryNode(1)
    ];

    let newKTree = fizzBuzzTree(testKTree);

    expect(newKTree.root.children[0].children[0].value).toBe('FizzBuzz');
    expect(newKTree.root.children[0].children[1].value).toBe('1');
  });
});
