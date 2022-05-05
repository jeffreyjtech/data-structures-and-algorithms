'use strict';

const Hashtable = require('../Hashtable');

function treeIntersection(treeA, treeB) {
  let valuesTable = new Hashtable(1024);
  let duplicates = [];
  const checkValues = (value) => {
    const duplicateFlag = valuesTable.setOrGet(value.toString(), value);
    if (duplicateFlag) {
      duplicates.push(value);
    }
  };
  treeA.traverseWithCallback(checkValues);
  treeB.traverseWithCallback(checkValues);

  return duplicates;
}

module.exports = treeIntersection;
