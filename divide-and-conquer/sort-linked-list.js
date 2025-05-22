// Approach
// Base Case: If the linked list has only one node or is empty, it is already sorted.
// Divide: Use a two-pointer approach to find the middle of the linked list. Split the list into two halves.
// Conquer: Recursively sort each half of the list.
// Merge: Combine the two sorted halves using a helper function that merges two sorted lists.

function sortList(head) {
  // Your solution goes here
  if (!head || !head.next) return head;
  const mid = findMid(head);

  const left = sortList(head)
  const right = sortList(mid)
  return mergeTwoLists(left, right);
}

var findMid = (head) => {
  let slow = head
  let fast = head
  let prev = slow

  //muon tim mid node thì dùng slow là có kết quả cần tìm,
  // nhưng đang cần chia mảng thành 2 phần nên biến prev sẽ lưu giá trị slow trước khi thay dổi
  //gán next của prev là null
  while (fast && fast.next !== null) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = null;
  return slow
}

var mergeTwoLists = function (list1, list2) {
  // vi khi duyet qua linked list se mat head nen can tao dummy node de cuoi cung se return dummy.next
  let dummy = new ListNode(-1)
  let head = dummy;
  while (list1 && list2) {
    if (list1.val >= list2.val) {
      head.next = new ListNode(list2.val)
      list2 = list2.next
    } else {
      head.next = new ListNode(list1.val)
      list1 = list1.next
    }
    head = head.next
  }
  if (list1) {
    head.next = list1
  }
  if (list2) {
    head.next = list2
  }
  return dummy.next
};

// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert linked list to array (for easy comparison)
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Example input
const inputArray = [4, 2, 1, 3];
const head = createLinkedList(inputArray);

// Function call
const sortedHead = sortList(head);

// Output result
console.log('Sorted List:', linkedListToArray(sortedHead)); // Expected: [1, 2, 3, 4]