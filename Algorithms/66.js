// Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let flag = true
  for (let i = digits.length - 1; i >= 0; i--) {
    if (flag) {
      digits[i]++
      flag = false
    }
    if (digits[i] > 9) {
      flag = true
    } else {
      return digits
    }
    digits[i] %= 10
  }
  digits.unshift(1)
  return digits
};
