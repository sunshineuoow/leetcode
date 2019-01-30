// Non-decreasing Array


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let index = -1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (index !== -1) return false
      index = i
    }
  }
  // index === -1 or index === 0 or index === nums.length - 2 代表可以修改一个或者无需修改
  // nums[index - 1] > nums[index + 1] || nums[index] > nums[index] + 2 无法成为非递减数列
  return (index <= 0 || index === nums.length - 2 || nums[index - 1] <= nums[index + 1] || nums[index] <= nums[index + 2])
};

