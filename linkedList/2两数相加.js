var addTwoNumbers = function (l1, l2) {
  // 进位树
  let carry = 0
  // 哨兵节点
  let preNode = new ListNode(-1)
  let currentNode = preNode
  while (l1 || l2) {
    // 当前位的数值和
    let sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry
    carry = Math.floor(sum / 10)
    let value = sum % 10
    currentNode.next = new ListNode(value)
    currentNode = currentNode.next
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }

  if (carry) {
    currentNode.next = new ListNode(carry)
  }

  return preNode.next
}
