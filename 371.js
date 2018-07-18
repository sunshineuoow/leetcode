// Sum of Two Integers

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  return eval([a, b].join('+')) // 56ms
};