/*
1. 这段代码虽然也实现了功能，但看上去惨不忍睹，代码量巨多，且混乱，保留下来，以后回头看看。
*/
var mergeTwoLists = function (l1, l2) {
  let l1Pointer = l1
  let l2Pointer = l2
  let newListHeadNode = (newListCurrentNode = null)
  while (l1Pointer && l2Pointer) {
    if (l1Pointer.val < l2Pointer.val) {
      if (!newListHeadNode) {
        newListHeadNode = newListCurrentNode = l1Pointer
      } else {
        newListCurrentNode.next = l1Pointer
        newListCurrentNode = newListCurrentNode.next
      }

      l1Pointer = l1Pointer.next
    } else {
      if (!newListHeadNode) {
        newListHeadNode = newListCurrentNode = l2Pointer
      } else {
        newListCurrentNode.next = l2Pointer
        newListCurrentNode = newListCurrentNode.next
      }
      l2Pointer = l2Pointer.next
    }
  }

  if (!l1Pointer && l2Pointer) {
    if (newListCurrentNode) {
      newListCurrentNode.next = l2Pointer
    } else {
      newListHeadNode = l2Pointer
    }
  }
  if (!l2Pointer && l1Pointer) {
    if (newListCurrentNode) {
      newListCurrentNode.next = l1Pointer
    } else {
      newListHeadNode = l1Pointer
    }
  }

  return newListHeadNode
}

/*
2. 简化版，增加了一个哨兵节点，之前大部分用于处理边界问题的代码都省略掉了，整体清晰
*/
var mergeTwoLists = function (l1, l2) {
  // 增加一个哨兵头节点
  let preHeadNode = new ListNode(null)
  let currentNode = preHeadNode
  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1
      // 将指针后移一位
      l1 = l1.next
    } else {
      currentNode.next = l2
      l2 = l2.next
    }
    currentNode = currentNode.next
  }
  currentNode.next = l1 || l2

  return preHeadNode.next
}
