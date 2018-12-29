// Sort Array By Parity

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const odd = []
  const even = []
  A.forEach(item => {
    if (item % 2 === 0) {
      odd.push(item)
    } else {
      even.push(item)
    }
  })
  return odd.concat(even)
};
