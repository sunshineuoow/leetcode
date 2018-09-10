// Largest Number At Least Twice of Others

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = nums[0]
  let index = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      index = i
      max = nums[i]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > max && i !== index) {
      return -1
    }
  }
  return index
}
