// 2. Add Two Numbers

const run = (l1, l2) => {
    let dummy = new ListNode()
    let carry = 0
    let sum = dummy
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const tempSum = val1 + val2 + carry
        carry = Math.floor(tempSum / 10)
        const digit = tempSum % 10
        
        sum.next = new ListNode(digit)
        sum = sum.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    printList(dummy.next)
    return dummy.next
}

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

function arrayToList(arr) {
    const dummy = new ListNode()
    let current = dummy
    for (num of arr) {
        current.next = new ListNode(num)
        current = current.next
    }
    return dummy.next
}

function printList(head) {
    const result = []
    while (head) {
        result.push(head.val)
        head = head.next
    }
    console.log(result)
    return result
}

console.log(run(arrayToList([2, 4, 3]), arrayToList([5, 6, 4])))