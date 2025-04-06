function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // TODO: Implement the solution
  let cur = head;
  let nextNode; // store next part of linked list when reversing pointer of each node
  let prevNode = null; // store result
  while (cur) {
    nextNode = cur.next;
    cur.next = prevNode;
    prevNode = cur;
    cur = nextNode;
  }
  return prevNode
};

// Helper function to create linked list from array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print linked list
function printLinkedList(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

// Example input
const head = createLinkedList([1, 2, 3, 4, 5]);
const reversed = reverseList(head);
printLinkedList(reversed); // Expected output: [5, 4, 3, 2, 1]
