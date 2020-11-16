/* 
  1.  时间复杂度O(n),空间复杂度O(n),利用了数组，然后双指针判断，暴力破解法，
*/
var isPalindrome = function (head) {
  let arr = []
  let currentNode = head

  // 遍历该链表，将val存到数组中
  while (currentNode) {
    arr.push(currentNode.val)
    currentNode = currentNode.next
  }

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }

  return true
}
