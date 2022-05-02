'use strict';

const quickSort = require('.');

describe('Testing quickSort function', () => {

  test('Can sort a 2-number array', () => {
    let testArr = [34, 6];
    quickSort(testArr);

    expect(testArr).toEqual([6, 34]);
  });

  test('Can sort a 3-number array', () => {
    let testArr = [34, 6, 12];
    quickSort(testArr);

    expect(testArr).toEqual([6, 12, 34]);
  });

  test('Can sort a 6-number array', () => {
    let testArr = [34, 6, 12, 100, -2, 40];
    quickSort(testArr);

    expect(testArr).toEqual([-2, 6, 12, 34, 40, 100]);
  });

  test('Does not change an already-sorted array', () => {
    let testArr = [101, 102, 103];
    quickSort(testArr);

    expect(testArr).toEqual([101, 102, 103]);
  });

  test('Can sort a reverse-sorted array', () => {
    let testArr = [25, 10, 0, -20];
    quickSort(testArr);

    expect(testArr).toEqual([-20, 0, 10, 25]);
  });

  test('Can sort an array with duplicate values', () => {
    let testArr = [10, 10, 0, 0, 0, -20];
    quickSort(testArr);

    expect(testArr).toEqual([-20, 0, 0, 0, 10, 10]);
  });
});
