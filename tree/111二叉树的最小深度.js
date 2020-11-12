/*
1. 最开始是按照求最大深度写的，结果不对，原因是如果该节点有一个子树为空，就直接返回这个为空时的
该节点的深度了，题目是要求叶子节点
*/

var minDepth = function (root) {
  if (!root) return 0
  if (!root.left) return minDepth(root.right) + 1
  if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}
