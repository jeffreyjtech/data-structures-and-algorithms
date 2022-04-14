'use strict';

class KaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }
}

function fizzBuzz(value) {
  let result = value.toString();
  if(value % 15 === 0) {
    result = 'FizzBuzz';
  } else if (value % 5 === 0){
    result = 'Buzz';
  } else if (value % 3 === 0){
    result = 'Fizz';
  }
  return result;
}

function fizzBuzzTree (karyTree) {
  let newTree = new KaryTree();

  const dualTraverse = (node, newNode) => {
    // Set the new tree's node to the fizzbuzzed valued of the input node
    newNode.value = fizzBuzz(node.value);
    for (let i = 0; i < node.children.length; i++) {
      // Each child of newNode must be assigned a newly constructed KaryNode
      // The other solution I had ended up modifying the input tree by reference
      newNode.children[i] = new KaryNode(null);
      dualTraverse (node.children[i], newNode.children[i]);
    }
  };
  // Give newTree an empty node so our base case matches well with the recursive logic
  newTree.root = new KaryNode(null);

  dualTraverse(karyTree.root, newTree.root, newTree);

  return newTree;
}

module.exports = {
  KaryNode,
  KaryTree,
  fizzBuzzTree
};
