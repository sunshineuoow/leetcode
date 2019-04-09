// Fair Candy Swap

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((sum, curr) => sum + curr, 0)
  const sumB = B.reduce((sum, curr) => sum + curr, 0)
  const delta = (sumA - sumB) / 2
  const setB = new Set(B)
  for (let i = 0; i < A.length; i++) {
    const item = A[i]
    if (setB.has(item - delta)) {
      return [item, item - delta]
    }
  }
}
