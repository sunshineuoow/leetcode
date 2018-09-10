// Longest Continuous Increasing Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length === 0) return 0
  let res = length = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      length++
      res = Math.max(length, res)
    } else {
      length = 1
    }
  }
  return res
}