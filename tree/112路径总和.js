/* 
1. 受257题的启发，先将所有路径上的节点值总和结果存储到一个数组中，然后再判断输入的和值，是否存在这个数组中。
*/
var hasPathSum = function (root, sum) {
  let pathValue = []
  const addNodeValue = (node, val) => {
    if (!node) return

    val += node.val
    // 遇到了叶子节点
    if (!node.left && !node.right) {
      pathValue.push(val)
    } else {
      addNodeValue(node.left, val)
      addNodeValue(node.right, val)
    }
  }
  addNodeValue(root, 0)

  return pathValue.indexOf(sum) > -1
}

/*
2. 这种递归，不是返回所有的路径的节点和，而是通过每遍历一层，输入的和减去该节点的值，
直到叶子节点，判断此时的输入和是否等于该节点值，来确定是否这条路径的节点值总和等于最开始输入的值。
  */

var hasPathSum = function (root, sum) {
  if (!root) return false

  if (!root.left && !root.right) {
    return root.val === sum
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  )
}
