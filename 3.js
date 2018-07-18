// Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	var anwser = 0
	for (let i = 0; i < s.length; i++) {
		for (let j = s.length; j > i; j--) {
			const str = s.substring(i, j)
			if (Array.from(new Set(str.split(''))).join('') === str) {
				if (str.length > anwser) anwser = str.length
			}
		}
	}
	return anwser
};

console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('a'))
console.log(lengthOfLongestSubstring('bwf'))
console.log(lengthOfLongestSubstring(''))
