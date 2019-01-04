// Pascal's Triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = []
  let item
  for (let i = 0; i < numRows; i++) {
    item = new Array(i + 1)
    item[0] = 1
    if (i > 0) item[i] = 1
    if (i >= 2) {
      for (let j = 1; j < item.length - 1; j++) {
        item[j] = result[i - 1][j] + result[i - 1][j - 1]
      }
    }
    result.push(item)
  }
  return result
}

