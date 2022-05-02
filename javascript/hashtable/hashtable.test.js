'use strict';

const HashTable = require('./');

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

  // test('Successfully handle a collision within the hashtable', () => {
  //   let keys = testTable.keys();

  //   expect(keys.includes('Hello')).toBe(true);
  // });
});
