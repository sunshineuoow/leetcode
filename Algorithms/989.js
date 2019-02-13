// Add to Array-Form of Integer

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let flag = false
  for (let i = A.length - 1; i >=0; i--) {
    const num = K % 10
    A[i] += num
    K = parseInt(K / 10, 10)

    if (flag) {
      A[i] += 1
      flag = false
    }

    if (A[i] > 9) {
      A[i] %= 10
      flag = true
    }

    if (K === 0 && !flag) return A
  }

  if (flag) K += 1

  while (K > 0) {
    A.unshift(K % 10)
    K = parseInt(K / 10, 10)
  }
  return A
};
