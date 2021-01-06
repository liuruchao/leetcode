/*
1. 时间复杂度O(n)，空间复杂度O(1)
双指针法，慢指针指向已处理的最后一项，快指针指向未处理的第一项
*/
var removeDuplicates = function (nums) {
  let slowIndex = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[slowIndex]) {
      nums[++slowIndex] = nums[i]
    }
  }

  return Math.min(slowIndex + 1, nums.length)
}
