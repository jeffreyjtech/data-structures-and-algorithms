'use strict';

const HashTable = require('./Hashtable');
const hashmapLeftJoin = require('./hashmapLeftJoin');

describe('Testing hashmapLeftJoin function', () => {
  let synTable = new HashTable();
  let antTable = new HashTable();

  test('Returns correct array with only one antonym to search for', () => {

    synTable.set('diligent', 'employed');
    antTable.set('diligent', 'idle');

    expect(hashmapLeftJoin(synTable, antTable)).toStrictEqual([['diligent', 'employed', 'idle']]);
  });

  test('Returns correct array with multiple antonyms to search for', () => {

    synTable.set('fond', 'enamored');
    antTable.set('fond', 'averse');

    synTable.set('guide', 'usher');
    antTable.set('guide', 'follow');

    expect(hashmapLeftJoin(synTable, antTable)).toStrictEqual(
      [
        ['diligent', 'employed', 'idle'],
        ['fond', 'enamored', 'averse'],
        ['guide', 'usher', 'follow'],
      ]
    );
  });

  test('Returns an array with a null value when an antonym is not found', () => {

    synTable.set('outfit', 'garb');

    expect(hashmapLeftJoin(synTable, antTable)).toStrictEqual(
      [
        ['diligent', 'employed', 'idle'],
        ['outfit', 'garb', null],
        ['fond', 'enamored', 'averse'],
        ['guide', 'usher', 'follow'],
      ]
    );
  });
});
