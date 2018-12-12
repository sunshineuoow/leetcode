// Reverse Integer


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const flag = x < 0
  const result = Math.abs(x).toString().split('').reverse().join('')
  if (result > Math.pow(2, 31)) return 0
  return flag ? -Number(result) : Number(result)
};
