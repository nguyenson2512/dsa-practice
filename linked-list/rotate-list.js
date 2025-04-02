

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // TODO: Implement the solution
  if (!head) {
    return head
  }
  const dummy = head;
  let len = 1;
  // find the length of linked list and set the tail of ll by head variable
  while (head.next) {
    len++
    head = head.next
  }
  k = k % len;
  if (k == 0) {
    return dummy;
  }

  //iterate to find new head
  let cur = dummy;
  for (let i = 0; i < len - k - 1; i++) {
    cur = cur.next
  }
  let newHead = cur.next;
  //set the end of ll
  cur.next = null;
  //head currently is the tail, and set its next to dummy
  head.next = dummy;
  return newHead
};
// 1 2 3 4 5 
// Example input
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

const k = 2;
const result = rotateRight(head, k);
console.log(result); // Expected output: [4, 5, 1, 2, 3] (represented as a linked list)
