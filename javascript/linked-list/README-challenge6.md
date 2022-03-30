# Challenge Summary

Extend a Linked List with various insertion methods:

- `.append(value)`
  - adds a new node with the given `value` to the end of the list
- `.insertBefore(value, newValue)`
  - adds a new node with the given `newValue` immediately before the first node that has the `value` specified
- `.insertAfter(value, newValue)`
  - adds a new node with the given `newValue` immediately after the first node that has the `value` specified

## Whiteboard Process
<!-- Embedded whiteboard image -->
Whiteboard not complete

## Approach & Efficiency

My approach for the `append` method was to replicate the traversal logic from `includes` and insert a new Node when the `tail` is found. Then, for remaining 2 methods, `insertBefore` and `insertAfter`, I sought to replicate when I had written for `append` but now with different conditions for stopping the traversal. These approaches were chosen because I found it easiest to iterate upon logic for traversing arrays and inserting values at a specific point which I already understood.

For all 3 methods, the Big O time & space efficiencies are O(n) & O(1), respectively.

## Solution

### Example usage

```js
myLL = new LinkedList;

myLL.append(12); 

console.log(myLL.head.value) // Prints the value 12

myLL.insertBefore(12, true)

console.log(myLL.head.value) // Prints the value true

myLL.insertAfter(true, 11)

console.log(myLL.head.next.value) // Prints the value 11
console.log(myLL.toString()) // Method from previous code challenge, 
// Will print string: '[true] -> [11] -> [12] -> NULL'
```
