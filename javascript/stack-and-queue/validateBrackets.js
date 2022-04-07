'use strict';

function validateBrackets(string) {
  let result = false;
  const allBracketsRegex = /[()[\]{}]/;
  let stringArr = string.split('');
  stringArr = stringArr.filter((char) => allBracketsRegex.test(char));
  stringArr.forEach((char) => );

  return result;
}

module.exports = validateBrackets;
