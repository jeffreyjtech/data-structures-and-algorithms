# Challenge Summary

Write a function called `zipLists`, which has 2 parameters `list1` and `list2`. This function will take in 2 linked lists via the parameters and return a new linked list. The new list's nodes should be an interlacing of the input lists' nodes, like so:

`list1.head -> list2.head -> list1.head.next -> list2.head.next -> etc`.

## Whiteboard Process

![Whiteboard diagram of my solution](./challenge-08-whiteboard.jpg)

## Approach & Efficiency

My approach was to find a good enough solution and then revise it to simplify. My first version of this algorithm did not have "currentList" or "otherList", was easy enough to write out, but the code was not DRY and it was difficult to handle edge cases. But, it helped me wrap my head around the problem. Once I felt good with that solution, I revised it to something shorter and added more edge-case handling.

*Space Efficiency*: Since this function iteratively trims down `list1` and `list2` as new nodes are added to `newList`, the space efficiency should be O(1);

*Time Efficiency*: The time efficiency is O(n);

## Solution

```javascript
    let oddList = new LinkedList;
    let evenList = new LinkedList;
    oddList.append(1);
    oddList.append(3);
    oddList.append(5);

    evenList.append(2);
    evenList.append(4);
    evenList.append(6);

    let newList = zipLists(oddList, evenList)
    console.log(
      newList.toString(); // Prints [1] -> [2] -> [3] -> [4] -> [5] -> [6] -> NULL
    );
```
