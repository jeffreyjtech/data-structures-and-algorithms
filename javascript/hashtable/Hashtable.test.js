'use strict';

const HashTable = require('./Hashtable');

describe('Testing HashTable implementation', () => {
  let testTable = new HashTable(1024);

  test('Setting a key/value pair creates a bucket in the HashTable', () => {
    testTable.set('Hello', 'World');

    expect(testTable.buckets).toEqual(expect.arrayContaining([expect.anything()]));
  });

  test('Retrieving based on a key returns the value stored', () => {
    let value = testTable.get('Hello');

    expect(value).toBe('World');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let value = testTable.get('bad-key');

    expect(value).toBe(null);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let keys = testTable.keys();

    expect(keys.includes('Hello')).toBe(true);
  });

  test('Successfully handle a collision within the hashtable', () => {
    expect(testTable.hash('Hdmlo')).toBe(testTable.hash('Hello'));
    testTable.set('Hdmlo', 'bob');
    expect(testTable.buckets).toEqual(expect.arrayContaining([expect.anything()]));
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let value = testTable.get('Hdmlo');

    expect(value).toBe('bob');
    value = testTable.get('Hello');

    expect(value).toBe('World');
    testTable.set('Hdmmn', 'sup');
    value = testTable.get('Hdmmn');

    expect(value).toBe('sup');
  });

  test('Successfully hash a key to an in-range value', () => {
    testTable.set('testy key', 'testy value');
    for (let i = 0; i < 1000; i++){
      testTable.set((Math.random().toString()), Math.random());
    }
    expect(testTable.buckets.length).toBe(1024);
  });
});
