let numWaysMap = new Map()
var numWays = function (n) {
  if (n <= 1) {
    return 1
  } else if (n === 2) {
    return 2
  } else {
    if (numWaysMap.has(n)) {
      return numWaysMap.get(n)
    } else {
      let res = (numWays(n - 1) + numWays(n - 2)) % 1000000007
      numWaysMap.set(n, res)
      return res
    }
  }
}
