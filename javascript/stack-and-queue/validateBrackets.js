'use strict';

function validateBrackets(string) {
  let result = false;
  const opensRegex = /[([{]/gm;
  const closesRegex = /[)\]}]/gm;
  if (!(opensRegex.test(string) && closesRegex.test(string))) return false;
  let opens = string.match(opensRegex).sort();
  let closes = string.match(closesRegex).sort();
  let idx = 0;
  for (let char of opens) {
    let goodPair = String(char + closes[idx]) === '{}' || String(char + closes[idx]) === '[]' || String(char + closes[idx]) === '()';
    if (goodPair) {
      result = true;
      idx++;
    } else {
      return false;
    }
  }
  return result;
}

module.exports = validateBrackets;
