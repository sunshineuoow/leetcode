// Add Digits

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) {
    return num
  }
  let result = 0
  while (num > 0) {
    result += num % 10
    num = Math.floor(num / 10)
  }
  return addDigits(result)
};
