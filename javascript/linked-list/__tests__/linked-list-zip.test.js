'use strict';

// Require our linked list implementation
const { LinkedList, zipLists } = require('../index');

function constructLinkedList (valueArray){
  let list = new LinkedList;
  valueArray.forEach(element => list.append(element));
  return list;
}

describe('Linked List v4 tests (Code Challenge 08)', () => {

  it('Happy path: both lists are the same length and have more than 1 node', () => {
    let linkedList1 = new LinkedList;
    let linkedList2 = new LinkedList;
    linkedList1.append(1);
    linkedList1.append(3);
    linkedList1.append(5);

    linkedList2.append(2);
    linkedList2.append(4);
    linkedList2.append(6);

    let knownGoodLL = constructLinkedList([1,2,3,4,5,6]);

    let newLL = zipLists(linkedList1, linkedList2);

    expect(newLL).toStrictEqual(knownGoodLL);
  });

  it('Where list 1 is shorter than list 2', () => {
    let linkedList1 = new LinkedList;
    let linkedList2 = new LinkedList;

    linkedList1.append(1);
    linkedList1.append(3);

    linkedList2.append(2);
    linkedList2.append(4);
    linkedList2.append(6);

    // For this case, the longer list should occupy the remaining nodes in the zipped List
    let knownGoodLL = constructLinkedList([1,2,3,4,6]);

    let newLL = zipLists(linkedList1, linkedList2);

    expect(newLL).toStrictEqual(knownGoodLL);
  });

  it('Where list 2 is shorter than list 1', () => {
    let linkedList1 = new LinkedList;
    let linkedList2 = new LinkedList;

    linkedList1.append(1);
    linkedList1.append(3);
    linkedList1.append(5);
    linkedList1.append(7);

    linkedList2.append(2);
    linkedList2.append(4);

    // For this case, the longer list should occupy the remaining nodes in the zipped List
    let knownGoodLL = constructLinkedList([1,2,3,4,5,7]);


    let newLL = zipLists(linkedList1, linkedList2);

    expect(newLL).toStrictEqual(knownGoodLL);
  });

  it('Where list 1 is one node', () => {
    let linkedList1 = new LinkedList;
    let linkedList2 = new LinkedList;

    linkedList1.append(1);

    linkedList2.append(2);
    linkedList2.append(4);

    // For this case, the longer list should occupy the remaining nodes in the zipped List
    let knownGoodLL = constructLinkedList([1,2,4]);


    let newLL = zipLists(linkedList1, linkedList2);

    expect(newLL).toStrictEqual(knownGoodLL);
  });

  it('Where list 2 is one node', () => {
    let linkedList1 = new LinkedList;
    let linkedList2 = new LinkedList;

    linkedList1.append(1);
    linkedList1.append(3);
    linkedList1.append(5);

    linkedList2.append(2);

    // For this case, the longer list should occupy the remaining nodes in the zipped List
    let knownGoodLL = constructLinkedList([1,2,3,5]);


    let newLL = zipLists(linkedList1, linkedList2);

    expect(newLL).toStrictEqual(knownGoodLL);
  });

  it('Where list 1 head is null', () => {
    let linkedList1 = new LinkedList;
    let linkedList2 = new LinkedList;

    linkedList2.append(2);
    linkedList2.append(4);

    // For this case, the longer list should occupy the remaining nodes in the zipped List
    let knownGoodLL = constructLinkedList([2,4]);


    let newLL = zipLists(linkedList1, linkedList2);

    expect(newLL).toStrictEqual(knownGoodLL);
  });

  it('Where list 2 head is null', () => {
    let linkedList1 = new LinkedList;
    let linkedList2 = new LinkedList;

    linkedList1.append(1);
    linkedList1.append(3);
    linkedList1.append(5);

    // For this case, the longer list should occupy the remaining nodes in the zipped List
    let knownGoodLL = constructLinkedList([1,3,5]);

    let newLL = zipLists(linkedList1, linkedList2);

    expect(newLL).toStrictEqual(knownGoodLL);
  });

  it('Where both heads are null', () => {
    let linkedList1 = new LinkedList;
    let linkedList2 = new LinkedList;

    // For this case, the longer list should occupy the remaining nodes in the zipped List
    let knownGoodLL = constructLinkedList([]);

    let newLL = zipLists(linkedList1, linkedList2);

    expect(newLL).toStrictEqual(knownGoodLL);
  });
});
