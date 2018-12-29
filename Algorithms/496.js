// Next Greater Element I

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const obj = nums2.reduce((a, b, index) => {
    a[b] = index
    return a
  }, {})

  return nums1.map(item => {
    for (let i = obj[item] + 1; i < nums2.length; i++) {
      if (nums2[i] > item) return nums2[i]
    }
    return -1
  })
};
