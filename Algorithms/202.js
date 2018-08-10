// Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  while (true) {
    if (n < 10) return n === 1 || n === 7
    n = n.toString().split('').reduce((sum, i) => sum += Math.pow(Number(i), 2), 0)
  }
};
