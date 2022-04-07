'use strict';

function validateBrackets(string) {
  let result = false;
  const bracketsRegex = /[([{)\]}]/gm;
  if (bracketsRegex.test(string)) return false;
  let brackets = string.match(bracketsRegex);
  let matcherArray = [];
  for (let i = 0; i < brackets.length; i++) {
    if (/[([{]/gm.test(brackets[i+1])) {
      matcherArray.push(brackets.shift());
    } else if (brackets[i] + matcherArray[i] === '{}' || brackets[i] + matcherArray[i] === '[]' || brackets[i] + matcherArray[i] === '()') {
      brackets
    } else {
      return false;
    }
  }
  return result;
}

module.exports = validateBrackets;
