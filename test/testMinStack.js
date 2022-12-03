const { MinStack } = require('../minStack/minStack')
const assert = require('assert')
const { describe, it } = require('mocha')

describe("A minstack", () => {
    let testStack = new MinStack()

    beforeEach(() => {
        // reset the test object before each test
        testStack = new MinStack()
    })

    it("should not break when retrieving values from an empty stack", () => {
        assert.equal(testStack.getMin(), testStack.pop())
    })

    
    it("should return the min value with only one item in the stack", () => {
        testStack.push(3)
        assert.equal(testStack.getMin(), 3)
        assert.equal(testStack.size(), 1)
    })
    
    it("should correctly update the min value when a smaller number is pushed", () => {
        testStack.push(3)
        testStack.push(1)
        assert.equal(testStack.getMin(), 1)
        assert.equal(testStack.size(), 2)
    })
    
    it("should not change the min value if a larger number is pushed", () => {
        testStack.push(3)
        testStack.push(1)
        testStack.push(2)
        assert.equal(testStack.getMin(), 1)
        assert.equal(testStack.size(), 3)
    })

    it("should maintain the current min value when the popped value is not the min value", () => {
        testStack.push(1)
        testStack.push(3)
        assert.equal(testStack.getMin(), 1)

        testStack.pop()
        assert.equal(testStack.getMin(), 1)
    })

    it("should change the min value if the min value is popped", () => {
        testStack.push(3)
        assert.equal(testStack.getMin(), 3)
    
        testStack.push(1)
        assert.equal(testStack.getMin(), 1)

        testStack.pop()
        assert.equal(testStack.getMin(), 3)
    })

    it("should update the min value even if many values are pushed and popped", () => {
        testStack.push(5)
        testStack.push(3)
        testStack.push(1)
        testStack.push(10)
        testStack.push(-1)
        testStack.push(2)

        assert.equal(testStack.getMin(), -1)
        testStack.pop()
        assert.equal(testStack.getMin(), -1)
        testStack.pop()
        assert.equal(testStack.getMin(), 1)
        testStack.pop()
        assert.equal(testStack.getMin(), 1)
        testStack.pop()
        assert.equal(testStack.getMin(), 3)
        testStack.push(0)
        assert.equal(testStack.getMin(), 0)
        testStack.push(25)
        assert.equal(testStack.getMin(), 0)
        testStack.pop()
        testStack.pop()
        testStack.pop()
        assert.equal(testStack.getMin(), 5)

    })
})