// Power of Two

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false
  return Number(n.toString(2).slice(1)) === 0
};
