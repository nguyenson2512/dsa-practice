
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // TODO: Implement the solution
  let fast = head, slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

// Helper function to create a linked list from array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Example input
let head = createLinkedList([1, 2, 3, 4, 5]);
let result = middleNode(head);
console.log(result); // Expected output: ListNode { val: 3, next: ... }
