// Intersection of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const result = []
  nums1.forEach(item => {
    if (nums2.indexOf(item) != -1 && result.indexOf(item) == -1) {
      result.push(item)
    }
  })
  return result
}
