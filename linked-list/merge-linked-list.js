

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // Your solution goes here
  // vi khi duyet qua linked list se mat head nen can tao dummy node de cuoi cung se return dummy.next
  let dummy = new ListNode(-1)
  let head = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1
      list1 = list1.next
    } else {
      head.next = list2
      list2 = list2.next
    }
    head = head.next
  }
  if (list1 !== null) {
    head.next = list1
  } else {
    head.next = list2
  }

  return dummy.next

};

// Example input
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// Function call
const result = mergeTwoLists(list1, list2);

// Output result function
function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log('Result:', arr); // Expected: [1,1,2,3,4,4]
}

printList(result);
