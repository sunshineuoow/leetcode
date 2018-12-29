// DI String Match

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let N = S.length
  let count = 0
  const result = []
  for (let i = 0; i < S.length + 1; i++) {
    if (S[i] === 'I') {
      result.push(count++)
    } else {
      result.push(N--)
    }
  }
  return result
};
