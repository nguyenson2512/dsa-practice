function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // TODO: Implement the solution
  if (n == 0) return head;
  let len = 0;
  let cur = head
  //find the length of linked list
  while (cur) {
    cur = cur.next;
    len++
  }
  //if remove the first node of linked list
  if (len == n) {
    return head.next;
  }
  cur = head;
  //traverse to the node that next to the removed node
  for (let i = 1; i < len - n; i++) {
    cur = cur.next
  }
  //remove node
  cur.next = cur.next.next;
  return head
};

// Helper function to create linked list from array
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print linked list
function printList(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

// Example input
const head = arrayToList([1]);
// const head = arrayToList([1, 2, 3, 4, 5]);
// const n = 2;
const n = 1;
const newHead = removeNthFromEnd(head, n);
printList(newHead); // Expected output: [1, 2, 3, 5]
