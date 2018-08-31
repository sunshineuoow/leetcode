// Power of Four

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return num > 0 && Math.log(num) / Math.log(4) % 1 === 0
};