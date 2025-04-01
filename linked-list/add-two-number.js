// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  // Implement solution here
  let head = new ListNode()
  const dummy = head
  let remain = 0;
  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + remain;
    if (sum >= 10) {
      head.next = new ListNode(sum % 10)
      remain = 1
    } else {
      head.next = new ListNode(sum)
      remain = 0
    }
    if (l1) {
      l1 = l1.next

    }
    if (l2) {
      l2 = l2.next

    }
    head = head.next
  }
  if (remain > 0) {
    head.next = new ListNode(remain)
  }

  return dummy.next

}

// Example input
const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // 465

// Expected output: [7,0,8] (807)
console.log(JSON.stringify(addTwoNumbers(l1, l2)))
