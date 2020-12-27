/*
1. 时间复杂度O(n2),空间复杂度O(1)，最坏情况下遍历两次数组才找到两个数值
*/
var twoSum = function (nums, target) {
  let restutNums = [0, null]

  let numsLen = nums.length
  while (!restutNums[1] || restutNums[0] < numsLen - 1) {
    for (let i = restutNums[0] + 1; i < numsLen; i++) {
      if (nums[restutNums[0]] + nums[i] === target) {
        restutNums[1] = i
        return restutNums
      }
    }
    restutNums[0]++
  }

  return []
}
