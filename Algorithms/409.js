// Longest Palindrome

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const arr = new Array(58).fill(0)
  let result = odd = 0
  for (let i = 0; i < s.length; i++) 
    arr[s.charCodeAt(i) - 65]++

  for (let i = 0; i < 58; i++) {
    if (arr[i] === 0) continue
    if (arr[i] % 2 === 1) ++odd
    result += parseInt(arr[i] / 2) * 2
  }
  return odd > 0 ? ++result : result
};
