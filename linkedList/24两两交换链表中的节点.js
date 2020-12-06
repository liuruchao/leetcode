var swapPairs = function (head) {
  return swapNode(head, head ? head.next : null)
}

function swapNode(currentNode, nextNode) {
  if (!currentNode || !nextNode) {
    return currentNode
  } else {
    // 交换
    let tempNode = nextNode.next

    nextNode.next = currentNode

    currentNode.next = swapNode(tempNode, tempNode ? tempNode.next : null)
    return nextNode
  }
}
