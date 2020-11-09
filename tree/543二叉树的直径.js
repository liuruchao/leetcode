/* 
1. 要找二叉树的最长直径，可以看成找这颗树上，经过这个节点、其左子树、右子树节点中路径
最长的一条；而要计算经过这个节点最长的路径，则可看作，计算这个节点的左右子树的深度的和。
*/

var diameterOfBinaryTree = function (root) {
  if (!root) return 0
  // 经过当前节点的最长路径
  let temp = getNodeDep(root.left) + getNodeDep(root.right)
  return Math.max(
    temp,
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right)
  )
}

function getNodeDep(node) {
  if (!node) return 0
  return Math.max(getNodeDep(node.left), getNodeDep(node.right)) + 1
}
