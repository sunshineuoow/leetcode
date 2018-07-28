// Reshape the Matrix

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (nums.length * nums[0].length !== r * c) return nums
  const result = []
  const temp = []
  for (let i = 0; i < nums.length; i++) temp.push(...nums[i])
  for(let i = 0; i < r; i++) result[i] = temp.splice(0, c)
  return result
}