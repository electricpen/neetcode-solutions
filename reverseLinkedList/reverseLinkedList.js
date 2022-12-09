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
    }
}

module.exports = {
    reverseList: reverseList,
    ReversableList: ReversableList,
    ListNode: ListNode
}