# Trees

Trees are a elementary data structure which stores data in linked nodes. The nodes contain a value and a set number of references to other nodes. A tree with nodes containing two references is a Binary Tree. Binary Trees are useful for their ability to store and retrieve sorted data very efficiently.

## Challenge

In this Code Challenge, I had to implement the following classes and methods:

- Binary Tree class
  - with a method for each subtype of depth-first traversals, which return an array of the values, ordered appropriately:
    - `preOrder()`
    - `inOrder()`
    - `postOrder()`
- Binary Search Tree class
  - with `add()` method
    - Arguments: `value`
    - Return: nothing
    - Adds a new node with that `value` in the correct location in the binary search tree.
  - with `contains()` method
    - Argument: `value`
    - Returns: `Boolean` indicating whether or not the `value` is in the tree at least once.

## Approach & Efficiency

For the Binary Tree methods, I used the recursive logic demonstrated in the class demo. I added my own method called `errorIfEmpty()` which does what it says on the tin. It is called at the start of every traversal method, and it satisfies the requirement that my code generates a semantic error if you try to traverse an empty tree. For all 3, The time and space efficiencies are O(n) and O(1) respectively.

For the Binary Search Tree methods, I tried using iterative logic for `add()`, then recursive logic for `contains()`. I can say both work, but recursive logic is much cleaner and probably handles more edge cases. They share the same time and space efficiencies. For time, it's O(log(n)) if the binary tree is perfectly balanced (best-case) and O(n) if the binary tree is totally unbalanced (all nodes are right or left, worst-case).

## API

- `Tree` class
  - Has one property: `root` which is either `null` or a `Node` object
  - with a method for each subtype of depth-first traversals, which return an array of the values, ordered appropriately:
    - `preOrder()`
    - `inOrder()`
    - `postOrder()`
- `SearchTree` class, extending `Tree`
  - Inherits the `root` property of `Tree`, has no additional properties.
  - with `add()` method
    - Arguments: `value`
    - Return: nothing
    - Adds a new node with that `value` in the correct location in the binary search tree.
  - with `contains()` method
    - Argument: `value`
    - Returns: `Boolean` indicating whether or not the `value` is in the tree at least once.
    