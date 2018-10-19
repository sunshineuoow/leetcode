// Ugly Number

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 0) return false;
  while(true) {
    if (num % 5 === 0) {
      num /= 5;
    } else if (num % 3 === 0) {
      num /= 3;
    } else if (num % 2 === 0) {
      num /= 2;
    } else {
      return num === 2 || num === 5 || num === 3 || num === 1;
    }
  }
};
