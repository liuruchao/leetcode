/*
1. 借助一个数组来完成需求，但空间复杂度较高为O(n),并且扫描了两遍，时间复杂度高
*/
var removeNthFromEnd = function (head, n) {
  let nodeArray = []
  let currentNode = head
  // 先遍历一遍，将链表的节点存到数组中
  while (currentNode) {
    nodeArray.push(currentNode)
    currentNode = currentNode.next
  }

  // 删除倒数节点
  nodeArray.splice(nodeArray.length - n, 1)

  let newHead = nodeArray[0] || null
  for (let i = 0; i < nodeArray.length; i++) {
    nodeArray[i].next = nodeArray[i + 1] || null
  }

  return newHead
}

/*
2. 使用双指针，遍历一遍，时间复杂度O(n)，空间复杂度O(1)
*/
var removeNthFromEnd = function (head, n) {
  // 加一个哑节点
  let dummy = new ListNode(-1)
  dummy.next = head

  let fastNode = head

  let slowNode = dummy

  // 快指针先指向距离慢指针n个节点的位置
  while (n) {
    n--
    fastNode = fastNode.next
  }

  // 当快指针指向尾节点的后一个节点时，此时慢节点为要删除节点的前驱节点
  while (fastNode) {
    slowNode = slowNode.next
    fastNode = fastNode.next
  }

  slowNode.next = slowNode.next.next

  return dummy.next
}
