'use strict';

const insertionSort = require('../');

describe('Testing insertionSort function', () => {

  test('Can sort a 2-number array', () => {
    let testArr = [34, 6];
    insertionSort(testArr);

    expect(testArr).toEqual([6, 34]);
  });

  test('Can sort a 3-number array', () => {
    let testArr = [34, 6, 12];
    insertionSort(testArr);

    expect(testArr).toEqual([6, 12, 34]);
  });

  test('Does not change an already-sorted array', () => {
    let testArr = [101, 102, 103];
    insertionSort(testArr);

    expect(testArr).toEqual([101, 102, 103]);
  });

  test('Can sort a reverse-sorted array', () => {
    let testArr = [25, 10, 0, -20];
    insertionSort(testArr);

    expect(testArr).toEqual([-20, 0, 10, 25]);
  });

  test('Can sort an array with duplicate values', () => {
    let testArr = [10, 10, 0, 0, 0, -20];
    insertionSort(testArr);

    expect(testArr).toEqual([-20, 0, 0, 0, 10, 10]);
  });
});
