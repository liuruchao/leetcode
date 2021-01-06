/*
1. 时间复杂度O(n),空间复杂度O(1)
和26题解法类型，还是双指针
*/
var removeElement = function (nums, val) {
  let slowIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[slowIndex] = nums[i]
      slowIndex++
    }
  }

  return slowIndex
}
