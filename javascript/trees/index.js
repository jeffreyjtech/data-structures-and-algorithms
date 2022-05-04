'use strict';

const { Queue } = require('../stack-and-queue');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  errorIfEmpty() {
    if(!this.root) {
      throw new Error('Method failed because tree is empty');
    }
  }

  preOrder() {
    this.errorIfEmpty();
    let results = [];
    let traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    this.errorIfEmpty();
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    this.errorIfEmpty();
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  traverseWithCallback(callback) {
    this.errorIfEmpty();
    let results = [];
    let traverse = (node) => {
      callback(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  findMaxValue() {
    this.errorIfEmpty();
    let biggestNumber = null;
    let traverse = (node) => {
      if (biggestNumber === null || biggestNumber < node.value) {
        biggestNumber = node.value;
      }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return biggestNumber;
  }
}

class SearchTree extends Tree {
  constructor() {
    super();
  }

  add(value) {
    let newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (current) {
      if(value > current.value) {
        if(current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return;
        }
      } else if (value < current.value) {
        if(current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return;
        }
      } else {
        throw new Error('Value already exists');
      }
    }
  }

  contains(value) {

    const traverse = (node) => {
      if(!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      } else if (value < node.value) {
        return traverse(node.left);
      } else {
        return traverse(node.right);
      }
    };

    return traverse(this.root);
  }

  findSortedMaxValue() {
    this.errorIfEmpty();

    const traverse = (node) => {
      if (node.right === null && node.left === null) {
        return node.value;
      } else if (node.left === null) {
        return traverse(node.right);
      } else if (node.right === null) {
        return traverse(node.right);
      } else {
        if(node.right.value > node.left.value) {
          return traverse(node.right);
        } else {
          return traverse(node.left);
        }
      }
    };

    return traverse(this.root);
  }
}

function breadthFirst(tree) {
  tree.errorIfEmpty();
  let levelQueue = new Queue();
  levelQueue.enqueue(tree.root);
  let current = tree.root;
  let result = [];

  while(!levelQueue.isEmpty()) {
    current = levelQueue.dequeue();
    result.push(current.value);

    if (current.left) levelQueue.enqueue(current.left);
    if (current.right) levelQueue.enqueue(current.right);
  }

  return result;
}

module.exports = {
  Tree,
  Node,
  SearchTree,
  breadthFirst,
};
