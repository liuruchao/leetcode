/* 
1. 该题是用BFS广度优先搜索，不同的是从下到上遍历输出，所以在遍历完每层后，放到结果队首
*/
var levelOrderBottom = function (root) {
  if (!root) return []
  // 结果
  let res = []

  // 存放节点的队列
  let queue = [root]

  while (queue.length) {
    let layerArr = []
    let currentQueueLen = queue.length
    for (let i = 0; i < currentQueueLen; i++) {
      let node = queue.shift()
      layerArr.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    // 添加到队首
    res.unshift(layerArr)
  }

  return res
}
