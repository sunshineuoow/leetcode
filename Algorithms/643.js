// Maximum Average Subarray I


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let result = 0
  let stashResult
  for (let i = 0; i < k; i++) result += nums[i]
  stashResult = result

  for (let i = 0; i < nums.length - k; i++) {
    stashResult += nums[i + k] - nums[i]
    result = Math.max(stashResult, result)
  }
  return result / k
};
