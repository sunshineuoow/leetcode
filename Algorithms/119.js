// Pascal's Triangle II

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const result = new Array(rowIndex + 1).fill(1)
  for (let i = 1; i < rowIndex; i++) {
    let prev = 1
    for (let j = 1; j <= i; j++) {
      const curr = result[j]
      result[j] = result[j] + prev
      prev = curr
    }
  }
  return result
}
