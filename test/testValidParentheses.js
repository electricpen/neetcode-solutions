const { isValid } = require('../validParentheses/validParentheses')
const assert = require('assert')
const { describe, it } = require('mocha')

describe("validParentheses", () => {
    it("should return a boolean", () => {
        assert.equal(typeof isValid("[]"), "boolean")
    })
    
    it("should return true if parentheses match", () => {
        assert.equal(isValid("[]"), true)
    })

    it('should return false if there are an uneven number of parentheses', () => {
        assert.equal(isValid("["), false)
    })

    it('should return false if there are an uneven number of parentheses', () => {
        assert.equal(isValid("]"), false)
    })

    it('should return false if there are an uneven number of parentheses', () => {
        assert.equal(isValid("[]("), false)
    })

    it('should return false if the type of parentheses is mismatched', () => {
        assert.equal(isValid("(]"), false)
    })

    it('should return false if the type of parentheses is mismatched', () => {
        assert.equal(isValid("(]"), false)
    })

    it('should return false if close parentheses come before open', () => {
        assert.equal(isValid("]["), false)
    })

    it('should return true if multple sets of parentheses match', () => {
        assert.equal(isValid("[]()"), true)
    })

    it('should return true if multple sets of parentheses match', () => {
        assert.equal(isValid("[](){}"), true)
    })

    it('should return true if multple sets of parentheses match', () => {
        assert.equal(isValid("([](){[]()})"), true)
    })
})