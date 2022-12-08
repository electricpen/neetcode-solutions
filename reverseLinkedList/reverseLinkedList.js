// Leetcode problem 206
// https://leetcode.com/problems/reverse-linked-list/

const { LinkedList } = require('../dataStructures/LinkedList')

// the leetcode version of this problem does not use a LinkedList class, it uses the following data structure:
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const reverseList = head => {
    // if a list has zero or one element then it does not need to be reversed
    if(head === null || head?.next === null) {
        return head
    }
    let prev = null
    let curr = head
    let next = head.next

    while(curr !== null) {
        curr.next = prev
        prev = curr
        curr = next
        next = next ? next.next : null
    }

    return prev
}

// If you prefer to do this as a class, use the code below

// Note:
// Highly recommend writing your own linked list class to extend for this problem 
// (If you do, remove or comment the LinkedList require on line 4 of this file)
// The tests require that your LinkedList class have the following properties:
// push: function (takes a value as an argument - not a node)
// the Nodes in your list must have the following properties:
// next: default to null, is a pointer to the next node in the list
// value: holds the value of the node

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
    ReversableList: ReversableList,
    ListNode: ListNode
}