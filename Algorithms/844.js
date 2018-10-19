// Backspace String Compare

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let sArr = [], tArr = [];
  let i = 0;
  let item = '';

  for (i = 0; i < S.length; i++) {
    item = S[i];
    if (item !== '#') {
      sArr.push(item)
    } else if (item === '#' && sArr.length) {
      sArr.pop()
    }
  }

  for (i = 0; i < T.length; i++) {
    item = T[i];
    if (item !== '#') {
      tArr.push(item)
    } else if (item === '#' && tArr.length) {
      tArr.pop()
    }
  }

  return sArr.join('') === tArr.join('');
};
