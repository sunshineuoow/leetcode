// 1-bit and 2-bit Characters


/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let length = 0
  while(length < bits.length - 1) {
    length += bits[length] + 1
  }
  return length === bits.length - 1
};
