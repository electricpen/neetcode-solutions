const { Stack } = require('../dataStructures/Stack')

class MinStack extends Stack {
    // Stack implementation already has a push, pop, and peek function
    // check the Stack.js file in the /dataStructures folder for implementation
    constructor(values) {
        super(values)
        this.minValues = new Stack()
    }

    push(value) {
        const newMin = this.minValues.size() > 0 ? Math.min(value, this.minValues.peek()) : value
        this.minValues.push(newMin)
        super.push(value)
    }

    pop() {
        this.minValues.pop()
        return super.pop()
    }

    // leetcode uses a different method name for peek, this method is an alias
    top() {
        return this.peek()
    }

    getMin() {
        // Should return the lowest value in the stack (note this does not modify the stack)
        return this.minValues.peek()
    }
}

module.exports = {
    MinStack: MinStack,
}