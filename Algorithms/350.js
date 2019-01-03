// Intersection of Two Arrays II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if (nums2.length < nums1.length) {
    [nums1, nums2] = [nums2, nums1]
  }

  const map = nums1.reduce((a, b) => {
    a[b] ? a[b]++ : a[b] = 1
    return a
  }, {})

  return nums2.filter(num => {
    if (map[num] > 0) {
      map[num]--
      return true
    }
  })
};
