/* 
  1. 递归，反转二叉树可以将其拆解成每颗子树，进行反转，递归终止条件，仍然是遇到叶子节点后。

  该题比较简单，是我真正意义上自己独立解出来的第一道题
*/
var invertTree = function (root) {
  if (!root) return null

  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left),
  }
}

/* 
 2. 第一个写法，并不好，是直接返回了一颗新二叉树，应该在原树上进行反转
 */

var invertTree = function (root) {
  if (!root) return null

  let saveNode = invertTree(root.left)

  root.left = invertTree(root.right)

  root.right = saveNode

  return root
}
