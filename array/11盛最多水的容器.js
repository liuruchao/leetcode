/*
1. 时间复杂度O(n*2),空间复杂度O(1)
暴力破解法，遍历每一个可能结果，得到最大面积
*/
var maxArea = function (height) {
  let maxArea = 0

  let len = height.length

  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let areaWidth = i - j
      let areaHeight = Math.min(height[j], height[i])

      maxArea = Math.max(maxArea, areaWidth * areaHeight)
    }
  }

  return maxArea
}
