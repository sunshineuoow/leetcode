// Transpose Matrix

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const height = A[0].length 
  const width = A.length
  const result = new Array(height)
  for (let i = 0; i < height; i++) {
    result[i] = new Array(width)
    for (let j = 0; j < width; j++) {
      result[i][j] = A[j][i]
    }
  }
  return result
};

console.log(transpose([[1,2,3],[4,5,6]]))