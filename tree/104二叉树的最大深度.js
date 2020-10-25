/* 1. 使用递归
  递归公式  nodeHeight = Max(leftNodeHeight, rightNodeHeight) + 1

  递归终止条件  node === null
*/

function maxDepth(root) {
  if (!root) return 0

  let height = 0
  const leftNodeHeight = maxDepth(root.left)
  const rightNodeHeight = maxDepth(root.right)

  height = Math.max(leftNodeHeight, rightNodeHeight) + 1

  return height
}
