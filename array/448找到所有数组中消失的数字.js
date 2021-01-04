/*
1. 时间复杂度O(n),空间复杂度O(1)
*/
var findDisappearedNumbers = function (nums) {
  let numsLen = nums.length
  // 先遍历一遍，将已出现的数值，下标为该值的位置的值赋值为负数
  for (let i = 0; i < numsLen; i++) {
    let index = Math.abs(nums[i]) - 1
    if (nums[index] > 0) {
      nums[index] = -nums[index]
    }
  }

  let result = []
  // 再遍历一遍，找出值不为负数的下标，即为未出现的值
  for (let i = 0; i < numsLen; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }
  return result
}
