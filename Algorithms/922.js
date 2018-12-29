// Sort Array By Parity II

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const result = new Array(A.length)
  let flag1 = 0
  let flag2 = 1
  A.forEach(item => {
    if (item % 2 === 0) {
      result[flag1] = item
      flag1 += 2
    } else {
      result[flag2] = item
      flag2 += 2
    }
  })
  return result
};
