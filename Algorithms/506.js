// Relative Ranks

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let first = second = third = 0
  nums.unshift(0)
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[first]) {
      third = second      
      second = first
      first = i
    } else if (nums[i] > nums[second]) {
      third = second      
      second = i
    } else if (nums[i] > nums[third]) {
      third = i
    }
  }
  nums[first] = 'Gold Medal'
  nums[second] = 'Silver Medal'
  nums[third] = 'Bronze Medal'
  nums.shift()
  return nums
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]))