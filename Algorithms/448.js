// Find All Numbers Disappeared in an Array


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]) - 1
    if (nums[val] > 0) nums[val] = -nums[val]
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1)
  }
  return result
}

