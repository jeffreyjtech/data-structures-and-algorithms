'use strict';

function hashmapLeftJoin(synonyms, antonyms) {
  let results = [];

  synonyms.callingAllKeys((value) => {
    let subArray = [];
    const keyWord = Object.keys(value)[0];
    const synonym = Object.values(value)[0];
    let antonym = antonyms.get(keyWord);
    antonym = antonym ? antonym : null ;
    subArray.push(keyWord, synonym, antonym);
    results.push(subArray);
  });

  return results;
}

module.exports = hashmapLeftJoin;
