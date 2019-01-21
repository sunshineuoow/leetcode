// Remove Duplicates from Sorted Array


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j]
      i++
    }
  }
  nums = nums.slice(0, i + 1)
  return i + 1
};
