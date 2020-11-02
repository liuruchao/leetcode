/* 1. 递归  DFS
 要判断该二叉树是否对称，就要判断根节点的左右子树是否对称
 则判断左子树的左子树是否等于右子树的右子树
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  return checkNode(root.left, root.right)
}

function checkNode(node1, node2) {
  if (!node1 && !node2) return true
  if (!node1 || !node2) return false

  return (
    node1.val === node2.val &&
    checkNode(node1.left, node2.right) &&
    checkNode(node1.right, node2.left)
  )
}
