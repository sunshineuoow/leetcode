// Reverse Linked List

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
var reverseList = function(head) {
  let prev = null, next = null
  while(head) {
    next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
};

function ListNode(val) {
  this.val = val
  this.next = null
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

console.log(reverseList(head))