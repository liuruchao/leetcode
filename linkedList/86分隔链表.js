/*
 1. 格外需要一个原链表长度的内存空间
*/

var partition = function (head, x) {
  // 存放小于x值的节点链表
  let smallListNode = new ListNode(null)
  let currentSN = smallListNode
  // 存放大于等于x值的节点链表
  let bigListNode = new ListNode(null)
  let currentBN = bigListNode

  while (head) {
    if (head.val < x) {
      currentSN.next = new ListNode(head.val)
      currentSN = currentSN.next
    } else {
      currentBN.next = new ListNode(head.val)
      currentBN = currentBN.next
    }
    head = head.next
  }

  // 将两个链表头尾连接
  currentSN.next = bigListNode.next

  return smallListNode.next
}
