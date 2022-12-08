const { LinkedList } = require('../dataStructures/LinkedList')
const assert = require('assert')
const { describe, it } = require('mocha')

describe("Linked lists", () => {
    it("should push new values to the list", () => {
        const testList = new LinkedList([1,2])
        assert.equal(testList.len() , 2)
        assert.equal(testList.head.value, 1)
        assert.equal(testList.head.next.value, 2)
    })

    it("should have a working contains method", () => {
        const testList = new LinkedList([1,2,3])
        assert.equal(testList.contains(2), true)
        assert.equal(testList.contains(1), true)
        assert.equal(testList.contains(3), true)
        assert.equal(testList.len(), 3)
        assert.equal(testList.contains(4), false)
    })

    it("should be able to pop values off of the list", () => {
        const testList = new LinkedList([1,2,3])
        const poppedValue = testList.pop()
        assert.equal(testList.contains(2), true)
        assert.equal(testList.contains(1), true)
        assert.equal(testList.contains(3), false)
        assert.equal(testList.contains(4), false)
        assert.equal(testList.len(), 2)
        assert.equal(poppedValue, 3)
    })

    it("should be able to unshift values on to the list", () => {
        const testList = new LinkedList()
        testList.unshift(1)
        assert.equal(testList.contains(1), true)
        assert.equal(testList.len(), 1)
    })

    it("should be able to unshift values on to the list", () => {
        const testList = new LinkedList()
        testList.unshift(1)
        testList.unshift(2)
        testList.unshift(3)
        testList.pop()
        assert.equal(testList.len(), 2)
        assert.equal(testList.contains(1), false)
        assert.equal(testList.contains(2), true)
        assert.equal(testList.contains(3), true)
    })

    it("should be able to shift values from the list", () => {
        const testList = new LinkedList([1,2,3])
        const shiftedValue = testList.shift()
        assert.equal(shiftedValue, 1)
        assert.equal(testList.contains(2), true)
        assert.equal(testList.contains(3), true)
        assert.equal(testList.len(), 2)
    })

    it("should not break when popping from an empty list", () => {
        const testList = new LinkedList()
        const poppedValues = testList.pop()
        assert.equal(testList.len(), 0)
        assert.equal(poppedValues, null)
    })

    it("should not break when shifting from an empty list", () => {
        const testList = new LinkedList()
        const poppedValues = testList.shift()
        assert.equal(testList.len(), 0)
        assert.equal(poppedValues, null)
    })
})