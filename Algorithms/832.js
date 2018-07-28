// Flipping an Image

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length / 2; j++) {
      const temp = A[i][j]
      A[i][j] = 1 - A[i][A[0].length - 1 - j]
      A[i][A[0].length - 1 - j] = 1 - temp
    }
  }
  return A
}
