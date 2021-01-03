/*
1. 时间复杂度O(n),空间复杂度O(n)
借助了额外空间来存储0值下标，然后交换数据
*/
var moveZeroes = function (nums) {
  let zeroePosition = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroePosition.push(i)
    } else {
      // 已含有0字段的下标，进行位置互换
      if (zeroePosition[0] !== undefined) {
        let temp = nums[i]
        nums[zeroePosition[0]] = temp
        nums[i] = 0
        // 删除该0数值下标,位置交换后，重新放入数组中
        zeroePosition.shift()
        if (zeroePosition[0] !== undefined && zeroePosition[0] > i) {
          zeroePosition.unshift(i)
        } else {
          zeroePosition.push(i)
        }
      }
    }
  }

  return nums
}

/*
2. 时间复杂度O(n),空间复杂度O(1)
双指针法，一个指针指向第一个值为0的下标，另一个遍历数组，遇到非0值，则进行交换
*/
var moveZeroes = function (nums) {
  let zeroIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i]
      nums[i] = nums[zeroIndex]
      nums[zeroIndex] = temp
      zeroIndex++
    }
  }

  return nums
}
