/* 1. 使用递归
  递归公式  nodeHeight = Max(leftNodeHeight, rightNodeHeight) + 1

  递归终止条件  node === null
*/

function maxDepth(root) {
  if (!root) return 0

  let height = 0
  const leftNodeHeight = maxDepth(root.left)
  const rightNodeHeight = maxDepth(root.right)

  height = Math.max(leftNodeHeight, rightNodeHeight) + 1

  return height
}

/* 2. 使用层次遍历
  按照层次遍历，依次遍历节点
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0

  let queue = []
  let depth = 0
  queue.push(root)
  while (queue.length) {
    // 当前层的节点个数
    let currentLayerLen = queue.length
    // 遍历该层的节点，边遍历边出队，然后将下一层的节点再入队，遍历完成后，深度加1
    for (let i = 0; i < currentLayerLen; i++) {
      let currentNode = queue.shift()
      currentNode.left && queue.push(currentNode.left)
      currentNode.right && queue.push(currentNode.right)
    }
    depth++
  }

  return depth
}
