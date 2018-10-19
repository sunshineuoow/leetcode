// Find Pivot Index

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (!nums.length) return -1;

  let sum = 0, left = 0, right = 0;
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  for (i = 0; i < nums.length; i++) {
    left = sum - (nums[i] + right);
    if (right === left) {
      return i;
    }
    right += nums[i];
  }
  return -1;
};
