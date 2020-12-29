/*
1 时间复杂度O(n^2) 空间复杂度O(1)
暴力破解法
*/
var maxProfit = function (prices) {
  let profit = 0
  let pricesLen = prices.length
  for (let i = 0; i < pricesLen; i++) {
    for (let j = i + 1; j < pricesLen; j++) {
      let currentProfit = prices[j] - prices[i]
      if (currentProfit > profit) {
        profit = currentProfit
      }
    }
  }
  return profit
}

/*
2. 时间复杂度O(n),空间复杂度O(1)
贪心算法思想，找到历史最低价格，然后按照贪心，计算之后的每天的卖出利润，找出一个最大值
*/
var maxProfit = function (prices) {
  let minPrices = prices[0]
  let maxProfit = 0
  let pricesLen = prices.length
  for (let i = 0; i < pricesLen; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrices)
    if (minPrices >= prices[i]) {
      minPrices = prices[i]
    }
  }
  return maxProfit
}
