// Remove Duplicates from Sorted Array II

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  while (i < nums.length) {
    while (nums[i + 2] === nums[i]) {
      nums.splice(i + 2, 1)
    }
    i++
  }
  return nums.length
}
