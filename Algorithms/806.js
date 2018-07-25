// Number of Lines To Write String


/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  var result = [1, 0]
  for (var i = 0; i < S.length; i++) {
    var letter_length = widths[S.charCodeAt(i) - 97]
    console.log(result[1])
    if (result[1] < 100 && (result[1] + letter_length) > 100) {
      result[0] += 1
      result[1] = letter_length
    } else if (result[1] < 100 && (result[1] + letter_length) === 100) {
      result[0] += 1
      result[1] = 0
    } else {
      result[1] += letter_length
    }
  }
  return result
};
