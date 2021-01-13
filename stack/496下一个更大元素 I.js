/*
  1.暴力求解
*/
var nextGreaterElement = function (nums1, nums2) {
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    let stack = []
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        let maxNum = ""
        while (stack.length) {
          let rightNum = stack.pop()
          if (rightNum > nums1[i]) {
            maxNum = rightNum
            break
          }
        }
        result.push(maxNum || -1)
        break
      } else {
        stack.push(nums2[j])
      }
    }
  }

  return result
}

/*
2. 单调栈
*/

var nextGreaterElement = function (nums1, nums2) {
  // 申请一个map,用来存储nums1中每个元素的最近右侧大值
  let map = new Map()
  // 单调栈
  let stack = []
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      map.set(stack.pop(), nums2[i])
    }
    stack.push(nums2[i])
  }

  // 单调栈中若还有数值，那么就是顺序一下变小的值，它们没有对应的右侧大值
  while (stack.length) {
    map.set(stack.pop(), -1)
  }
  let result = []
  for (let j = 0; j < nums1.length; j++) {
    result.push(map.get(nums1[j]))
  }

  return result
}
