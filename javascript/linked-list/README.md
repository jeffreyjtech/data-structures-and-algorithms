# Singly Linked List

This is a singly linked list class. Using a Node, class you are able to create a linked list of nodes. Includes methods for inserting nodes, finding if a certain value exists in the tree, and more.

## Challenge

The challenge was to create a LinkedList class with methods for inserting nodes, finding nodes, and otherwise using the data stored in the LinkedList.

## Approach & Efficiency

My approach was to incorporate my own ideas about how I think this data structure should work. My LinkedList class and its methods ended up looking like much of the code presented during lecture today. One special feature I added was an optional `next` parameter to the Node class constructor. This `next` parameter, which is set to `null` if not used, allows the `next` property to be set when a Node is created.

## API
<!-- Description of each method publicly available to your Linked List -->

- `new LinkedList()`
  - Constructor receives no parameters
- `.insert(value)`
  - Receives a `value` parameter of any data type.
  - Adds a node storing the given value to the `head` of the list.
  - Returns `undefined`.
- `.append(value)`
  - Receives a `value` parameter of any data type.
  - Adds a node storing the given value to the `tail` of the list.
  - Returns `undefined`.
- `.includes(value)`
  - Receives a `value` parameter of any data type.
  - Searches for a node which stores an equivalent value.
  - Returns `true` if search is successful, `false` if not successful.
- `.toString()`
  - Receives no parameters
  - Returns a `string` representing the values in the LinkedList's nodes.
    - For a LinkedList with 3 nodes: `[ a ] -> [ b ] -> [ c ] -> NULL`
