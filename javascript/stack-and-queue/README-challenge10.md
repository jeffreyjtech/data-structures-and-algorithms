# Stacks and Queues

This challenge revolves around two data structures which are extensions of the Linked List, as they both use Nodes with a `value` and a `next` node reference.

- Stacks: A FIFO (first-in-first-out) data structure with a `top` node which can be moved down the stack with a new node with `push()` or removed and read with `pop()`.
- Queue: A FILO (first-in-last-out) data structure with a `front` and `rear` node. A new `rear` node can be added with `enqueue()` and the `front` node can be read and removed with `dequeue()`.

## Challenge

Created two classes, one which implement the features of Stack and one which implements the features of a Queue. This includes the methods mentioned above (`push()`, `pop()` for Stack, `enqueue()` and `dequeue()` for Queue) as well as `peek()` and `isEmpty()` for both data structures.

## Approach & Efficiency

I can't say I took any particular approach to implementing Stack and Queue. I just wanted to write clean, simple methods with time and space efficiencies of O(1).

## API

### Stack methods:

- `push()`
  - Arguments: `value`
  - Adds a new node with that value to the `top` of the stack with an O(1) time efficiency.
- `pop()`
  - Arguments: none
  - Returns: the value from node from the `top` of the stack
  - Removes the node from the `top` of the stack
  - Raises an exception when called on empty stack
- `peek()`
  - Arguments: none
  - Returns: Value of the node located at the `top` of the stack
  - Raises an exception when called on empty stack
- `isEmpty()`
  - Arguments: none
  - Returns: Boolean indicating whether or not the stack is empty.

### Queue methods:

- `enqueue()`
  - Arguments: `value`
  - Adds a new node with that value to the `back` of the queue with an O(1) time efficiency.
- `dequeue()`
  - Arguments: none
  - Returns: the value from node from the `front` of the queue
  - Removes the node from the `front` of the queue
  - Raises an exception when called on empty queue
- `peek()`
  - Arguments: none
  - Returns: Value of the node located at the `front` of the queue
  - Raises an exception when called on empty stack
- `isEmpty()`
  - Arguments: none
  - Returns: Boolean indicating whether or not the queue is empty
