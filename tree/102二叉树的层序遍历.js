/* 1. 广度优先搜索
*/

var levelOrder = function (root) {
  if (!root) return []
  // 依次按层存放从左自右存放节点的队列
  let queue = []
  let res = []
  queue.push(root)
  while (queue.length) {
    // 当前层中含有的节点值
    let currentLayer = []
    // 当前层的节点个数
    let currentLayerLen = queue.length
    for (let i = 0; i < currentLayerLen; i++) {
      let currentNode = queue.shift()
      currentLayer.push(currentNode.val)
      currentNode.left && queue.push(currentNode.left)
      currentNode.right && queue.push(currentNode.right)
    }
    res.push(currentLayer)
  }

  return res
}
