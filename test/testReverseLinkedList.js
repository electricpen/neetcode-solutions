const { reverseList, ListNode, ReversableList } = require('../reverseLinkedList/reverseLinkedList')
const assert = require('assert')
const { describe, it } = require('mocha')

class testReversableList extends ReversableList {
    constructor(values) {
        super(values)
    }

    contains(value) {
        let found = false
        if(this.head) {
            let pointer = this.head
            while(pointer !== null) {
                if (pointer.value === value) {
                    found = true
                }
                pointer = pointer.next
            }
        }
        return found
    }

    pushValuesToList(values) {
        for(let value of values) {
            this.push(value)
        }
    }

    len() {
        let size = 0
        let pointer = this.head
        while(pointer) {
            size++
            pointer = pointer.next
        }
        return size
    }

    equals(list) {
        if(this.len() !== list.len()) {
            return false
        }

        let ourPointer = this.head
        let comparePointer = list.head
        while(ourPointer !== null && comparePointer !== null) {
            if(ourPointer.value !== comparePointer.value) {
                return false
            }

            ourPointer = ourPointer.next
            comparePointer = comparePointer.next
        }
        return true
    }
}

describe("reverseList", () => {
    it("should reverse a list", () => {
        let inputList = new ListNode(1)
        inputList.next = new ListNode(2)
        inputList.next.next = new ListNode(3)

        let expectedResults = new ListNode(3)
        expectedResults.next = new ListNode(2)
        expectedResults.next.next = new ListNode(1)

        let results = reverseList(inputList)
        
        assert.equal(results.val, expectedResults.val)
        assert.equal(results.next.val, expectedResults.next.val)
        assert.equal(results.next.next.val, expectedResults.next.next.val)
        assert.equal(results.next.next.next, null)
    })

    it("should reverse a length 2 list", () => {
        let inputList = new ListNode(1)
        inputList.next = new ListNode(2)


        let expectedResults = new ListNode(2)
        expectedResults.next = new ListNode(1)

        let results = reverseList(inputList)
        
        assert.equal(results.val, expectedResults.val)
        assert.equal(results.next.val, expectedResults.next.val)
        assert.equal(results.next.next, null)
    })

    it("should reverse a length 1 list", () => {
        let inputList = new ListNode(1)
        let expectedResults = new ListNode(1)
        let results = reverseList(inputList)

        assert.equal(results.val, expectedResults.val)
        assert.equal(results.next, null)
    })

    it("should reverse a length 0 list", () => {
        let results = reverseList(new ListNode())
        assert.equal(results.val, 0)
        assert.equal(results.next, null)
    })
})

describe("class ReversableList", () => {
    it("should have a push method that takes a value (NOT a node) argument", () => {
        let testList = new testReversableList([1,2,3])
        assert.equal(testList.len(), 3)
        assert.equal(testList.contains(1), true)
        assert.equal(testList.contains(2), true)
        assert.equal(testList.contains(3), true)
    })

    it("should reverse a list", () => {
        let inputList = new testReversableList([1,2,3])
        let expectedResults = new testReversableList([3,2,1])
        let results = inputList.reverse()
        
        assert.equal(expectedResults.equals(results), true)
    })

    it("should reverse a length 2 list", () => {
        let inputList = new testReversableList([1,2])
        let expectedResults = new testReversableList([2,1])
        let results = inputList.reverse()
        
        assert.equal(expectedResults.equals(results), true)
    })

    it("should reverse a length 1 list", () => {
        let inputList = new testReversableList([1])
        let expectedResults = new testReversableList([1])
        let results = inputList.reverse()
        
        assert.equal(expectedResults.equals(results), true)
    })

    it("should reverse a length 0 list", () => {
        let inputList = new testReversableList()
        let expectedResults = new testReversableList()
        let results = inputList.reverse()
        
        assert.equal(expectedResults.equals(results), true)
    })
})