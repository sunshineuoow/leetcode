// Find All Duplicates in an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0) result.push(Math.abs(nums[i]))
    nums[Math.abs(nums[i]) - 1] = 0 - nums[Math.abs(nums[i]) - 1]
  }
  return result
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))