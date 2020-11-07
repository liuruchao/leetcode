/* 
1. 该解法的思路是，BFS遍历父二叉树，如果该树的某个节点与要被检测的树的根节点的值相同，
   则递归检查是否有相同结构与值，若是，则退出父二叉树的遍历，否则，则继续遍历寻找。

   该解法时间复杂度较高，因为最坏情况下，这两棵树没有相同的结构和值，但是有多个相同的节点值，
   那么会进行多次递归

*/

var isSubtree = function (s, t) {
  if (!s && !t) return true

  if (!s || !t) return false
  let queue = [s]

  while (queue.length) {
    let node = queue.shift()
    if (node.val === t.val && isSameTree(node, t)) {
      return true
    }
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

  return false
}

function isSameTree(p, q) {
  if (!p && !q) return true

  if (!p || !q) return false

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  )
}
