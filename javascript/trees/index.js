'use strict';

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
}

class SearchTree extends Tree {
  constructor() {
    super();
  }

  add(value) {
    let current = this.root;
    let newNode = new Node(value);
    while (current !== null) {
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
    current = newNode;
    return;
  }
}

module.exports = {
  Tree,
  Node,
  SearchTree
};
