/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // Your solution goes here
  const map = new Map();
  while (head && head.next) {
    if (map.get(head)) {
      return true
    }
    map.set(head, true)
    head = head.next;
  }
  return false
};

var hasCycleOptimized = function (head) {
  // Your solution goes here
  // Floyd’s Tortoise and Hare
  let slow = head, fast = head;
  //if fast points to null -> it means no cycle in linked list
  while (fast && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    // if slow and fast pointers meets each other
    if (slow === fast) {
      return true;
    }
  }
  return false
};

// Example input
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

// Function call
const result = hasCycleOptimized(node1);

// Output result
console.log('Result:', result); // Expected: true
