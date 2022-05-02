'use strict';

function mergeSort(array) {

  if (array.length > 1) {
    let temp = [...array];
    let mid = Math.floor(array.length / 2);
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
  console.log('Merging', left, right);
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      console.log('left[0] is less');
      result.push(left.shift());
    } else {
      console.log('right[0] is less');
      result.push(right.shift());
    }
  }

  if (left.length === 0) {
    console.log('Splicing in right', left, right);
    result.push(...right);
  } else {
    console.log('Splicing in left', left, right);
    result.push(...left);
  }
  console.log('After splice:', result);
  return result;
}

module.exports = mergeSort;
