'use strict';

const validateBrackets = require('../validateBrackets');

describe('Testing validateBrackets function', () => {

  test('Passes best-case scenarios', () => {
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('()')).toBe(true);
  });

  test('Passes nested brackets of different types', () => {
    expect(validateBrackets('([{}])')).toBe(true);
  });

  test('Passes text with each type of bracket', () => {
    expect(validateBrackets('(das)[{adsghlaskdj}asfd1243]')).toBe(true);
  });

  test('Fails string with no brackets', () => {
    expect(validateBrackets('no brackets?')).toBe(false);
  });

  test('Fails string with only one bracket', () => {
    expect(validateBrackets('one bracket!)')).toBe(false);
  });
  
  test('Fails string with only two brackets of different types', () => {
    expect(validateBrackets('(}')).toBe(false);
  });
});
