// Maximum Product of Three Numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let max1, max2, max3, min1, min2
  max1 = max2 = max3 = -1001
  min1 = min2 = 1001
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min1) {
      min2 = min1
      min1 = nums[i]
    } else if (nums[i] < min2) {
      min2 = nums[i]
    }
    if (nums[i] > max1) {
      max3 = max2
      max2 = max1
      max1 = nums[i]
    } else if (nums[i] > max2) {
      max3 = max2
      max2 = nums[i]
    } else if (nums[i] > max3) {
      max3 = nums[i]
    }
  }
  return Math.max(max1 * max2 * max3, min1 * min2 * max1)
};
