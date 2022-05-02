'use strict';

const LinkedList = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let chars = key.split('');
    let decodedSum = chars.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);

    return (decodedSum * 599) % 1024;
  }

  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value };

    // If the bucket is already occupied
    if (this.buckets[position]) {
      // Find the existing LinkedList which (hopefully) has an append method
      let bucket = this.buckets[position];
      bucket.append(data);
    } else {
      // Else create a new LinkedList and assign it to the bucket
      let bucket = new LinkedList();
      bucket.append(data);
      this.buckets[position] = bucket;
    }
  }

  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let current = bucket.head.value;
      while (!current[key]) {
        if (current.next === null) return null;
        current = current.next;
      }
      return current[key];
    } else {
      return null;
    }
  }

  contains(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let current = bucket.head.value;
      while (!current[key]) {
        if (current.next === null) return false;
        current = current.next;
      }
      return true;
    }
  }

  keys() {
    let existingHashes = this.buckets.filter((bucket) => Boolean(bucket));
    let keys = [];
    existingHashes.forEach((linkedList) => {
      linkedList.traverse((nodeValue) => keys.push(Object.keys(nodeValue)[0]));
    });
    return keys;
  }

}

module.exports = HashTable;
