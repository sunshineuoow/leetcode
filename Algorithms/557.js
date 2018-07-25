// Reverse Words in a String III

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').map(s => {return s.split('').reverse().join('')}).join(' ')
};