function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // TODO: Implement the solution
  //create dummy node to check case the node that need to be removed at the first place
  let dummy = new ListNode(-1);
  //dummy point to the current head
  dummy.next = head;
  let cur = dummy, nextNode;
  // check the next node if its value equal to val
  // -> change the next pointer of current node to the next of nextNode
  // if not equal -> move the cur to the next node
  while (cur.next) {
    nextNode = cur.next
    if (nextNode.val == val) {
      cur.next = nextNode.next;
    } else {
      cur = nextNode;
    }
  }
  return dummy.next
};

// --- Helper functions for testing ---

// Convert array to linked list
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Convert linked list to array (for easy result comparison)
function listToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Example input
let head = arrayToList([1, 2, 6, 3, 4, 5, 6]);
// let head = arrayToList([6, 6, 6, 6]);
let val = 6;
let newHead = removeElements(head, val);
console.log(listToArray(newHead)); // Expected output: [1, 2, 3, 4, 5]
