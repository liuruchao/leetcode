/*
 1. 时间复杂度O(1)，空间复杂度O(k)
*/
var maxSlidingWindow = function (nums, k) {
  if (!k) {
    return []
  }
  // 滑动窗口的队列
  let queue = []
  let result = []
  for (let i = 0; i < k; i++) {
    queue.push(nums[i])
  }
  for (let i = 0; i <= nums.length - k; i++) {
    // 计算值
    result.push(Math.max(...queue))
    // 出队
    queue.shift()
    // 入队
    queue.push(nums[i + k])
  }

  return result
}
