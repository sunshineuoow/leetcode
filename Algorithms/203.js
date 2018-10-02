// Remove Linked List Elements

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummyHead = new ListNode(null)
  dummyHead.next = head
  let prev = dummyHead
  while(prev.next !== null) {
    if (prev.next.val === val) {
      const delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
    } else {
      prev = prev.next
    }
  }
  return dummyHead.next
}
