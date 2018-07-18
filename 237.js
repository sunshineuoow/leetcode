// Delete Node in a Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};

function ListNode(val) {
  this.val = val
  this.next = null
}

ListNode.prototype.deleteNode = deleteNode

const node1 = new ListNode(0)
const node2 = new ListNode(1)
node1.next = node2

node1.deleteNode(node2)