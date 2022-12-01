// Leetcode problem #20
// https://leetcode.com/problems/valid-parentheses/

const Stack = require('../dataStructures/Stack')

var isValid = input => {
    // Your code here
    const openParenMatches = {
        "(": ")",
        "{": "}",
        "[": ']',
    }
    
    const closeParenMatches = {
        ")": "(",
        "}": "{",
        "]": "[",
    }
    const parentheses = new Stack()

    for(let character of input) {
        if(openParenMatches[character]) {
            parentheses.push(character)
        } else if (closeParenMatches[character] && parentheses.size > 0) {
            if(closeParenMatches[character] === parentheses.peek()) {
                parentheses.pop()
            }
        } else {
            return false
        }
    }

    return true
}