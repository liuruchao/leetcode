var sortedListToBST = function (head) {
  if (!head) {
    return head
  }

  // 双指针遍历找到链表的中间节点，则为根节点
  let slowNode = head
  let fastNode = head
  let preNode = null
  // 遍历一遍找到中间节点,为slowNode
  while (fastNode && fastNode.next) {
    preNode = slowNode
    slowNode = slowNode.next
    fastNode = fastNode.next.next
  }
  let rootNode = new TreeNode(slowNode.val)
  if (preNode) {
    // 断开链表
    preNode.next = null
    rootNode.left = sortedListToBST(head)
  }
  rootNode.right = sortedListToBST(slowNode.next)
  // 最开始有一个错误写法,没设置preNode
  // 断开链表，是将该节点设置null
  /* rootNode.right = sortedListToBST(slowNode.next)
  slowNode.next = null
  slowNode = null
  rootNode.left = sortedListToBST(head)
  */

  /*
    结果会导致爆栈，因为加入新的链表只有一个节点时，此时head就会一直往
    左子树里递归传入
  */

  return rootNode
}
