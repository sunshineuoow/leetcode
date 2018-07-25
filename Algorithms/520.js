// Detect Capital

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let flag = true
  let caseFunc
  if (word.charCodeAt(0) >= 97 || word.charCodeAt(1) >= 97) {
    caseFunc = 'toLowerCase'
  } else {
    caseFunc = 'toUpperCase'
  }
  for (let i = 1; i < word.length; i++) {
    flag = word.slice(1).replace(word[i], word[i][caseFunc]()) === word.slice(1)
    if (!flag) break
  }
  return flag
};