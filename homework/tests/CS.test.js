'use strict'

const {
  BinaireDecimal,
  DecimalABinaire,
} = require('../homework.js');

describe('BinaireDecimal(num)', function() {
  it('should return 2', function() {
    expect(BinaireDecimal('10')).toBe(2);
  });
  it('should return 7', function() {
    expect(BinaireDecimal('111')).toBe(7);
  });
});

describe('DecimalABinaire(num)', function() {
  it('should return "100"', function() {
    expect(DecimalABinaire(4)).toBe('100');
  });
  it('should return "111"', function() {
    expect(DecimalABinaire(7)).toBe('111');
  });
});
