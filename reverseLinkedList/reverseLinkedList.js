// Leetcode problem 206
// https://leetcode.com/problems/reverse-linked-list/

const { LinkedList } = require('../dataStructures/LinkedList')

// the leetcode version of this problem does not use a LinkedList class, it uses the following data structure:
class ListNode {
    super(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const reverseList = head => {
    const reversedList = new ListNode()
    let pointer = head
    let reversePointer = null
    while(pointer.val !== 0) {
        if(reversePointer) {
            reversePointer.next = pointer
            reversePointer = reversePointer.next
        } else {
            reversedList = head
            reversePointer = head
        }
    }

    return reversedList
}

// If you prefer to do this as a class, use the code below
// Highly recommend writing your own linked list class to extend for this problem
// If you don't want to write one you can use the LinkedList provided in the dataStructures directory
class ReversableList extends LinkedList {
    constructor(values) {
        super(values)
    }

    reverse() {
        // your code here, return a reversed list
        const reversedList = new ReversableList()
        this.forEach(node => {
            reversedList.unshift(node.value)
        })
        return reversedList
    }
}

module.exports = {
    reverseList: reverseList,
    ReversableList: ReversableList
}