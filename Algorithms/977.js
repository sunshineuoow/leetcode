// Squares of a Sorted Array

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(item => Math.pow(item, 2)).sort((a, b) => a - b)
};
