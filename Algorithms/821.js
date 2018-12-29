// Shortest Distance to a Character

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const result = []
  for (let i = 0; i < S.length; i++) {
    const index1 = S.indexOf(C, i)
    const index2 = S.lastIndexOf(C, i)

    if (index2 > -1) {
      result.push(Math.min(Math.abs(i - index2), Math.abs(index1 - i)))
    } else {
      result.push(index1 - i)
    }

  }
  return result
};
