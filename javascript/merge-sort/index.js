'use strict';

function mergeSort(array) {

  if (array.length > 1) {
    let temp = [...array];
    let mid = Math.ceil(array.length / 2);
    let left = temp.splice(0, mid);
    let right = temp;

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
  } else {
    // VERY IMPORTANT else & return statement
    // If this has recursed to the point that we're now dealing with single item arrays
    // We need to pop back up the callstack while returning the input array as-is for further merging.
    // Otherwise, when merge() is finally called, the provided args will be "undefined" instead of 2 arrays.
    return array;
  }
}

function merge(left, right) {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  if (left.length === 0) {
    result.push(...right);
  } else {
    result.push(...left);
  }
  return result;
}

module.exports = mergeSort;
