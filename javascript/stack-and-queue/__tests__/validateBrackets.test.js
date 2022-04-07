'use strict';

const validateBrackets = require('../validateBrackets');

describe('Testing validateBrackets function', () => {

  test('Passes best-case scenarios', () => {
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('()')).toBe(true);
  });
});
