const { Node } = require('./Node')

class LinkedList {
    constructor(values) {
        // Input: values is an optional parameter of type ARRAY for starting values of the linked list
        this.head = null
        if(values) {
            this.pushValuesToList(values)
        }
    }

    push(value) {
        const lastNode = this.getLastNode()
        const newNode = new Node(value)
        if(lastNode !== null) {
            lastNode.next = newNode
        } else {
            this.head = newNode
        }
    }

    pop() {
        const [ secondLast, last ] = this.getLastTwoNodes()
        if(secondLast) {
            secondLast.next = null
        }
        return last ? last.value : null
    }

    shift() {
        let value = null
        if(this.head) {
            value = this.head.value
            this.head = this.head.next
        }

        return value
    }

    unshift(value) {
        const newNode = new Node(value)
        if(this.head) {
            newNode.next = this.head
        }
        this.head = newNode
    }

    getLastNode() {
        if(this.head === null) {
            return null
        }

        let pointer = this.head
        while (pointer.next !== null) {
            pointer = pointer.next
        }
        return pointer
    }

    getLastTwoNodes() {
        if(this.head === null) {
            return [null, null]
        }

        let prev = null
        let curr = this.head

        while(curr.next !== null) {
            prev = curr
            curr = curr.next
        }

        return [prev, curr]
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

    forEach(callback) {
        let pointer = this.head
        while(pointer) {
            callback(pointer)
            pointer = pointer.next
        }
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

    print() {
        let output = []
        let pointer = this.head
        while(pointer) {
            output.push(pointer.value)
            pointer = pointer.next
        }
        output.push("null")
        console.log(output.join(" -> "))
    }
}

module.exports = {
    LinkedList: LinkedList
}