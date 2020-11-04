/* 
  1. 递归，先递到叶子节点，然后在由下至上，获取每个节点的左右子树的高度差，如果大于1，则return -1
*/

var isBalanced = function (root) {
  return balanced(root) !== -1
}

function balanced(node) {
  if (!node) return 0

  let left = balanced(node.left)

  let right = balanced(node.right)

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }

  return Math.max(left, right) + 1
}
