// Position of Large Groups

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  var char = S[0]
  var start_index = 0
  var length = 1
  var result = []
  for(var i = 1; i < S.length; i++) {
    if (char === S[i]) {
      length++
    } else {
      if (length >= 3) {
        result.push([start_index, start_index + length - 1])
      }
      char = S[i]
      length = 1
      start_index = i
    }
    if (i === S.length - 1 && length >= 3) {
      result.push([start_index, start_index + length - 1])
    }
  }
  return result
};

console.log(largeGroupPositions("aaa"))