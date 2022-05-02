# Hashtables

Hash Tables are a data structure which uses a mathematical function known as a hash function to store data in a table and quickly retrieve that data when it's needed. It stores key-value pairs, and this is necessary as the key must be able to be processed by a hash function. The value will store whatever you need stored. Each row of the table is a hash, which is normally limited by ending every hash function with `initialHash % n` with n being the number of unique hashes desired for the hash table.

## Challenge

Implement a Hashtable Class with the following methods:

- `set`
- `get`
- `contains`
- `keys`
- `hash`

More info in the [API](#api) section.

## Approach and Efficiency

My approach for Code Challenge was to make minor improvements to the code provided during lecture. This made it easy to get started on the assignment and think about how to write the additional methods required for the assignment. I used my LinkedList from previous Code Challenges and tried not to add any extra methods to accommodate this specific use case. Upon reflection, it may have been worth extending it into a "BucketList" class. Nonetheless, I succeeded in implementing all of the methods required.

- The Big O time efficiency for all methods except `hash` and `keys` are dependent on quantity of keys which may occupy the same bucket. In the worst case scenario, the time is O(n) for these functions.
  - The time efficiency for `hash` is O(1).
  - The time efficiency for `keys` is O(n), with n being the number of key-value pairs stored in the entire table and in any bucket.
- The space efficiency for all methods is O(1), as no significant amount of data is being generated for any of the methods.

## API

- `set`
  - Arguments: `key`, `value`
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.
- `get`
  - Arguments: `key`
  - Returns: Value associated with that key in the table
- `contains`
  - Arguments: `key`
  - Returns: Boolean, indicating if the key exists in the table already.
- `keys`
  - Returns: Collection of keys
- `hash`
  - Arguments: `key`
  - Returns: Index in the collection for that key