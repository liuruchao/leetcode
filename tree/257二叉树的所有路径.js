/*
1. 递归，先找到叶子节点，然后归回含有的路径的数组，缺点需要多次进行循环数组
*/
var binaryTreePaths = function (root) {
  // 空节点，返回空数组
  if (!root) return []
  // 左右节点都为空，则认为是叶子节点或者根节点
  if (!root.left && !root.right) {
    return [root.val + ""]
  }
  let res = []

  // 该左子节点有多少条路径，然后拼接到该节点上
  let leftPath = binaryTreePaths(root.left)
  for (let i = 0; i < leftPath.length; i++) {
    res.push(`${root.val}->${leftPath[i]}`)
  }

  let rightPath = binaryTreePaths(root.right)
  for (let i = 0; i < rightPath.length; i++) {
    res.push(`${root.val}->${rightPath[i]}`)
  }

  return res
}
