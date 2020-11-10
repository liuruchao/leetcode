/*
1. 二叉搜索树的特点是，每个节点的值要比其左子树下的节点值大，比右子树下的节点值大。
 当该节点的值大于范围最大值时，则抛弃掉右子树，对左子树进行递归修剪，反之亦然。
*/
var trimBST = function (root, low, high) {
  if (root === null) return null

  if (root.val > high) {
    return trimBST(root.left, low, high)
  }

  if (root.val < low) {
    return trimBST(root.right, low, high)
  }

  root.left = trimBST(root.left, low, high)
  root.right = trimBST(root.right, low, high)

  return root
}
