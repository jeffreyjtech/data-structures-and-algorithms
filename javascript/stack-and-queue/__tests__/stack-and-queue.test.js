'use strict';

const { Stack, Queue } = require('../index');

describe('Testing Stack class', () => {
  let testStack;

  test('Can create an empty stack', () => {
    testStack = new Stack;

    expect(testStack.top).toBeNull();
    expect(testStack.isEmpty()).toBe(true);
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
    let correctValue = testStack.top.value;
    let poppedValue = testStack.pop();

    expect(poppedValue).toBe(correctValue);
  });

  test('Can peek top value on stack', () => {
    let correctValue = testStack.top.value;
    let peekedValue = testStack.peek();

    expect(peekedValue).toBe(correctValue);
  });

  test('Calling pop or peek on an empty stack raises an exception', () => {
    testStack.pop();
    testStack.pop();

    expect(() => testStack.pop()).toThrow();
    expect(() => testStack.peek()).toThrow();
  });
});


describe('Testing Queue class', () => {
  let testQueue = new Queue;

  test('Create an empty queue', () => {
    testQueue = new Queue;

    expect(testQueue.front).toBeNull();
    expect(testQueue.back).toBeNull();
    expect(testQueue.isEmpty()).toBe(true);
  });

  test('Can enqueue one value', () => {
    testQueue.enqueue('blue');

    expect(testQueue.front.value).toBe('blue');
    expect(testQueue.front.next).toBeNull();
  });

  test('Can enqueue multiple values', () => {
    testQueue.enqueue('red');
    testQueue.enqueue('green');

    expect(testQueue.front.value).toBe('blue');
    expect(testQueue.front.next.value).toBe('red');
    expect(testQueue.front.next.next.value).toBe('green');
  });

  test('Can dequeue front value', () => {
    let correctValue = testQueue.front.value;
    let dequeuedValue = testQueue.dequeue();

    expect(dequeuedValue).toBe(correctValue);
  });

  test('Can peek top front value on stack', () => {
    let correctValue = testQueue.front.value;
    let peekedValue = testQueue.peek();

    expect(peekedValue).toBe(correctValue);
  });

  test('Calling pop or peek on an empty stack raises an exception', () => {
    testQueue.dequeue();
    testQueue.dequeue();

    expect(() => testQueue.dequeue()).toThrow();
    expect(() => testQueue.peek()).toThrow();
  });
});
