# Challenge Summary

Create a new class called `PsuedoQueue`, with methods `enqueue()` and `dequeue()` which have identical input parameters and return behavior as a real Queue. 

`PsuedoQueue` must be built within the following constraints:

- Do not use an existing Queue.
- Internally, utilize 2 Stack instances to create and manage the queue

## Whiteboard Process

![Whiteboard diagram of my solution](./challenge-08-whiteboard.jpg)

## Approach & Efficiency

My approach was to exploit the fact that chaining two stacks together ends up canceling out their LIFO nature to make a FIFO data structure. I created a `loadStack` and `unloadStack`. When `enqueue()` is called, `loadStack` will be filled with the contents of `unloadStack` using sequential pop-to-push calls, then the new value will be pushed onto `loadStack`. When `dequeue()` is called, `unloadStack` will be filled with the contents of `loadStack` using sequential pop-to-push calls, then the new value will be popped off `unloadStack`

## Solution

```javascript
let myPQueue = new PsuedoQueue;

// Can queue and dequeue single values
myPQueue.enqueue('red');

console.log(myPQueue.dequeue()) // Prints 'red'

// Can queue and dequeue several values
myPQueue.enqueue('green');
myPQueue.enqueue('blue');
myPQueue.enqueue('purple');

console.log(myPQueue.dequeue()) // Prints 'green'
console.log(myPQueue.dequeue()) // Prints 'blue'
console.log(myPQueue.dequeue()) // Prints 'purple'

myPQueue.dequeue() // Throws an unhandled error because myPQueue is empty.
```
