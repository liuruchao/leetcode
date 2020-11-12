/*
1. 题目给的数组为有序升序数组，而二叉搜索树特点是每个节点的左子树都比这个节点的值小，右子树的值都比这个节点的值大。
并且对这颗树进行中序遍历，得到的就是升序排序。
 所以取该数组的中间位置，来作为根节点，然后左边数组递归作为左子树，右边数组递归作为右子树，两棵树相差最多只有一个节点
*/
var sortedArrayToBST = function (nums) {
  let numLen = nums.length
  if (numLen === 0) return null

  let centerPoint = Math.floor(numLen / 2)

  let node = new TreeNode(nums[centerPoint])

  node.left = sortedArrayToBST(nums.slice(0, centerPoint))
  node.right = sortedArrayToBST(nums.splice(centerPoint + 1))

  return node
}
