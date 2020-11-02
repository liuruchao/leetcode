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

/* 2.迭代
  截止该题，二叉树的迭代方法，都会借助到队列或者栈的数据结构，用来存放要操作的节点
  声明一个队列，然后每次取两个节点，来比较这两个节点是否相同，入队的时候，顺序按照左子树的左子树，对右子树的右子树

*/

var isSymmetric = function (root) {
  let queue = [root, root]
  while (queue.length) {
    let n = queue.shift()
    let m = queue.shift()
    if (!m && !n) continue
    if (!m || !n || m.val !== n.val) return false
    queue.push(n.left, m.right, n.right, m.left)
  }
  return true
}
