// Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 需要一个值存储上次结果，并且和新的计算结果比较
  let res = sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    sum = sum > 0 ? sum + nums[i] : nums[i] // 如果sum计算为负数说明这个子数组会导致和降低，需要重置开始索引
    res = Math.max(sum, res) // 将暂存的结果与新结果比较
  }
  return res
}
