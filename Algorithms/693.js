// Binary Number with Alternating Bits

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  return !/00|11/g.test(n.toString(2))
};