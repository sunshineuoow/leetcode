// Hamming Distance

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).split('').reduce((sum, bit) => {
    if (bit === '1') sum++
    return sum
  }, 0)
}