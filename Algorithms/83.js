// Remove Duplicates from Sorted List

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null) return head
  let curr = head
  while(curr.next) {
    if (curr.next.val === curr.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
    
  }
  return head
}
