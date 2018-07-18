// Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const count_arr = new Array(26).fill(0)

  for (let i = 0; i < s.length; ++i) {
    count_arr[s.charCodeAt(i) - 97]++
    count_arr[t.charCodeAt(i) - 97]--
  }
  
  for (let i = 0; i < 26; ++i) {
    if (count_arr[i] !== 0) return false
  }

  return true
};
