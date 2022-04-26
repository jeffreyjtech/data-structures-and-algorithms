'use strict';

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i];
    while (j >= 0 && temp < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    // the above and below statements ensure j and j-1 are swapped
    // when the while loop breaks
    array[j + 1] = temp;
  }
}

module.exports = insertionSort;
