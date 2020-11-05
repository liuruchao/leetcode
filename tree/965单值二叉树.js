/* 1. 将根节点的值保存起来，
      然后按层遍历整颗树，检查是否有节点的值不等于该值，若无则为单值二叉树
 */
var isUnivalTree = function (root) {
  if (!root) return false

  let queue = []

  let rootValue = root.val

  queue.push(root)

  while (queue.length) {
    let currentNode = queue.shift()
    if (currentNode.val !== rootValue) {
      return false
    }

    currentNode.left && queue.push(currentNode.left)
    currentNode.right && queue.push(currentNode.right)
  }

  return true
}
