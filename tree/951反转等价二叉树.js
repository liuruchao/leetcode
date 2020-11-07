/*
1. 解题思路

往简单了说，就是判断一颗树与另一颗树是否相等（结构和值），或者将这棵树的左右子树进行一个反转，然后再判断是否相等。

这两个判断条件只要有一个为真，则这棵树就是翻转等价二叉树。

*/

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  if (!root1 && !root2) return true
  if (!root1 || !root2) return false

  return (
    root1.val === root2.val &&
    ((flipEquiv(root1.left, root2.right) &&
      flipEquiv(root1.right, root2.left)) ||
      (flipEquiv(root1.left, root2.left) &&
        flipEquiv(root1.right, root2.right)))
  )
}
