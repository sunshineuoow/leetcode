// Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 排序后中位数一定是最多的元素
  return nums.sort()[parseInt(nums.length / 2)]
};


var majorityElement2 = function(nums) {
  let major = nums[0], count = 1
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++
      major = nums[i]
    } else if (major === nums[i]) {
      count++
    } else {
      count--
    }
  }
  return major
};