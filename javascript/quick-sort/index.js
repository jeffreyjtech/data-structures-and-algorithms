'use strict';

function quickSort(arr, minIdx = 0, maxIdx = arr.length - 1) {
  if (minIdx < maxIdx) {
    let position = partition(arr, minIdx, maxIdx);
    quickSort(arr, minIdx, position - 1);
    quickSort(arr, position + 1, maxIdx);
  }
}

function partition(arr, leftIdx, rightIdx) {
  let pivot = arr[rightIdx];
  let low = leftIdx - 1;
  for (let i = leftIdx; i < rightIdx; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  low++;
  swap(arr, rightIdx, low);
  return low;
}

function swap(arr, i, low) {
  // Takes in an array and two indices
  // Swaps the values at those indices in the array in-place
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;
