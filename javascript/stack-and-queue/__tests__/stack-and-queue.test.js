'use strict';

const { Stack, Queue } = require('../index');

describe('Testing Stack class', () => {
  let testStack;

  test('Can create an empty stack', () => {
    testStack = new Stack;

    expect(testStack.top).toBeNull();
  });

  test('Can push one value onto stack', () => {
    testStack.push('blue');

    expect(testStack.top.value).toBe('blue');
    expect(testStack.top.next).toBeNull();
  });

  test('Can push multiple values onto stack', () => {
    testStack.push('red');
    testStack.push('green');

    expect(testStack.top.value).toBe('green');
    expect(testStack.top.next.value).toBe('red');
    expect(testStack.top.next.next.value).toBe('blue');
  });

  test('Can pop value off stack', () => {
    let poppedValue = testStack.pop();

    expect(poppedValue).toBe('green');
    expect(testStack.top.next.value).toBe('blue');
  });

  test

  test('Calling pop on an empty stack raises an exception', () => {
    testStack.pop();
    testStack.pop();

    expect(() => testStack.pop()).toThrow();
    expect(() => testStack.peek()).toThrow();
  });
});


describe('Testing Queue class', () => {

  test('Create an empty queue', () => {
    let testQueue = new Queue;

    expect(testQueue.front).toBeNull();
    expect(testQueue.back).toBeNull();
  });
});
/*
let myFirstQueue = new Queue;

myFirstQueue.enqueue(5);
myFirstQueue.enqueue(10);
myFirstQueue.enqueue(15);

console.log('Here\'s my queue:\n ',myFirstQueue);

let dequeue = myFirstQueue.dequeue();

console.log(`Now I\'ve dequeued \`${dequeue}\` off my queue:\n `, myFirstQueue);

myFirstQueue.dequeue();
let lastDequeue = myFirstQueue.dequeue();

console.log(`I can even dequeue the last node \`${lastDequeue}\` off my queue:\n `, myFirstQueue);

myFirstQueue.dequeue();
*/

/*
let myFirstStack = new Stack;

myFirstStack.push(1);
myFirstStack.push(2);

console.log('Here\'s my stack:\n ', myFirstStack);

let pop = myFirstStack.pop();

console.log(`Now I\'ve popped \`${pop}\` off my stack:\n `, myFirstStack);

console.log(myFirstStack.isEmpty());
*/
