/*
 1. 递归，要注意的是避免重复计算，使得执行时间增加
*/

// 用于存放已计算的值
let fibMap = new Map()
var fib = function (n) {
  // 递归终止条件
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    let N1 = n - 1
    let N2 = n - 2
    let fib1 = fibMap.has(N1) ? fibMap.get(N1) : fib(N1)
    let fib2 = fibMap.has(N2) ? fibMap.get(N2) : fib(N2)

    let fibNum = fib1 + fib2
    // 保存已计算出的结果，供后续使用，减少重复计算
    fibMap.set(n, fibNum)
    return fibNum % 1000000007
  }
}
