'use strict';

const HashTable = require('./Hashtable');

function repeatedWord(string) {
  let wordHashtable = new HashTable(1024);
  let cleanedString = string.toLowerCase();
  let wordArray = cleanedString.match(/[a-z]+/gmi);

  for (let word of wordArray) {
    let getFlag = wordHashtable.setOrGet(word, word);
    if(getFlag) return word;
  }
}

module.exports = repeatedWord;
