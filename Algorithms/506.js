// Relative Ranks

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let max = min = 0
  const stash = {}
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i])
    min = Math.min(min, nums[i])
    stash[nums[i]] = i + 1
  }
  let pos = 1
  const result = []
  console.log(stash)
  for (let i = max; i >= min; i--) {
    if (typeof stash[i] !== 'undefined') {
      switch (pos) {
        case 1:
          result[stash[i] - 1] = 'Gold Medal'
          break
        case 2:
          result[stash[i] - 1] = 'Silver Medal'
          break
        case 3:
          result[stash[i] - 1] = 'Bronze Medal'
          break
        default:
          result[stash[i] - 1] = pos.toString()
      }
      pos++
    }
  }
  return result
};
