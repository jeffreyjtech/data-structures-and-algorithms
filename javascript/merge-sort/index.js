'use strict';

function mergeSort(array) {
  let n = array.length;

  if (n > 1) {
    let temp = [...array];
    let mid = Math.ceil(n / 2);
    let left = temp.splice(0, mid);
    let right = temp;


    mergeSort(left);
    mergeSort(right);
    merge(left, right, array);
  }
}

function merge(left, right, array) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }

  console.log(array, right, left);
  console.log('i, j, k\n', i, j, k);
  if (i === left.length) {
    array.splice(k+left.length, right.length, ...right);
  } else {
    array.splice(k, left.length, ...left);
  }
  console.log('After splice:', array);
}

module.exports = mergeSort;
