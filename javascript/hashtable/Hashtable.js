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
      bucket.traverse((nodeValue) => {
        if (nodeValue[key] !== undefined) {
          nodeValue[key] = value;
          return;
        }
      });
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
      let current = bucket.head;
      while (!Object.keys(current.value).includes(key)) {
        if (current.next === null) return null;
        current = current.next;
      }
      return current.value[key];
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

  setOrGet(key, value) {
    // Basically the same as set, except if the key already exists, the existing value is returned with no changes made.
    let position = this.hash(key);
    let data = { [key]: value };

    // If the bucket is already occupied
    if (this.buckets[position]) {
      // Find the existing LinkedList which (hopefully) has an append method
      let bucket = this.buckets[position];
      // Traverse the LinkedList to check for keys of the same name
      let current = bucket.head;
      while (current !== null) {
        // Return true if the key is there;
        if(current.value[key] === 1) return current.value[key];
        current = current.next;
      }
      // If we've fallen out of the while loop, it's safe to assume the key is unique
      // Thus we'll append the the bucket
      bucket.append(data);
    } else {
      // Since a bucket does not already exist, create a new LinkedList and assign it to the bucket
      let bucket = new LinkedList();
      bucket.append(data);
      this.buckets[position] = bucket;
    }
  }
}

module.exports = HashTable;
