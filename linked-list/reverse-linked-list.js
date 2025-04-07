function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // TODO: Implement the solution
  let cur = head, tmpHead = null; // tmpHead store the node before left position, use it to change next pointer with prevNode

  for (let i = 0; i < left - 1; i++) {
    console.log(cur.val);
    tmpHead = cur
    cur = cur.next
  }

  let nextNode, prevNode = null, tmpTail = null;
  //prevNode store the reverse nodes
  //nextNode store the next node of cur, avoid missing the next node when we change the pointer
  //tmpTail store the last node in reversed nodes, connect it with the rest of linked list
  for (let i = left; i <= right; i++) {
    nextNode = cur.next;
    cur.next = prevNode;
    prevNode = cur;
    if (!tmpTail) {
      tmpTail = cur;
    }
    cur = nextNode;
  }
  // console.log({ prevNode, cur, tmpTail, tmpHead });
  //if tmpHead exists
  if (tmpHead) {
    tmpHead.next = prevNode;
  }
  tmpTail.next = cur;
  // console.log({ head, tmpHead });
  //if tmpHead equals null -> it means reverse nodes range start at the beginning of linked list
  return tmpHead ? head : prevNode;
};

// Example input
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const left = 2, right = 4;
// const head = new ListNode(3, new ListNode(5));
// const left = 1, right = 2;
const result = reverseBetween(head, left, right);
console.log(result);
// Expected output: [1, 4, 3, 2, 5]
