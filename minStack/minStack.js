const { Stack } = require('../dataStructures/Stack')

class MinStack extends Stack {
    // Stack implementation already has a push, pop, and peek function
    // check the Stack.js file in the /dataStructures folder for implementation
    constructor(values) {
        super(values)
    }

    getMin() {
        // Should return the lowest value in the stack (note this does not modify the stack)
    }
}

module.exports = {
    MinStack: MinStack,
}