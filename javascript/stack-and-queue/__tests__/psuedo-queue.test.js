'use strict';

const { PseudoQueue } = require('../index');

describe('Testing PseudoQueue class', () => {

  let testPQueue = new PseudoQueue;

  test('Can queue and dequeue one value onto PseudoQueue', () => {

    testPQueue.enqueue('red');

    expect(testPQueue.dequeue()).toBe('red');
  });

  test('Throws an exception when dequeuing while empty', () => {

    expect(testPQueue.dequeue).toThrow();
  });

  test('Can queue and dequeue several values onto PseudoQueue', () => {

    testPQueue.enqueue('green');
    testPQueue.enqueue('blue');
    testPQueue.enqueue('purple');

    expect(testPQueue.dequeue()).toBe('green');
    expect(testPQueue.dequeue()).toBe('blue');
    expect(testPQueue.dequeue()).toBe('purple');
  });
});
