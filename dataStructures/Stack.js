class Stack {
    constructor(values) {
        this.storage = values ? Array.from(values) : []
    }

    push(element) {
        return this.storage.push(element)
    }

    pop() {
        return this.storage.pop()
    }

    peek() {
        return this.storage[this.storage.length - 1]
    }

    size() {
        return this.storage.length
    }
}
module.exports = {
    Stack: Stack
}