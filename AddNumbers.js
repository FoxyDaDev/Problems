// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
    
// };

function reverseTwoArrays(l1, l2) {
  const reversed1 = [...l1].reverse();
  const reversed2 = [...l2].reverse();

  let sum1 = Number(reversed1.join(''));
  let sum2 = Number(reversed2.join(''));
  
  let sumAll = sum1 + sum2;
  const answer = sumAll.toString().split('').map(Number).reverse();

  return answer;
}

console.log(reverseTwoArrays([2,4,3],[5,6,4]))