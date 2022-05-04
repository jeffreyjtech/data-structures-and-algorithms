'use strict';

const Hashtable = require('../hashtable/Hashtable');

function treeIntersection(treeA, treeB) {
  let valuesTable = new Hashtable(1024);
  let duplicates = [];
  const checkValues = (value) => {
    const duplicateFlag = valuesTable.setOrGet(value.toString(), value);
    console.log(valuesTable);
    console.log(duplicateFlag);
    if (duplicateFlag) {
      duplicates.push(value);
    }
  };
  treeA.traverseWithCallback(checkValues);
  treeB.traverseWithCallback(checkValues);

  return duplicates;
}

module.exports = treeIntersection;
