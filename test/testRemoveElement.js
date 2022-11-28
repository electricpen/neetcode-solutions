const { removeElement } = require('../remove_element/removeElement')
const assert = require('assert')
const { describe, it } = require('mocha')

describe('Basic functionality of removeElement', () => {
    const input = [[1,2,3], 3]
    const results = removeElement(...input)

    it('should return an array', () => {
        assert.equal(Array.isArray(results), true)
    })

    it('should remove the passed in element', () => {
        assert.equal(results.length, 2)
        assert.deepEqual(results, [1,2])
    })
})

describe('removeElement edge cases', () => {
    const input = [[3,2,2,3], 3]
    const results = removeElement(...input)
    it('should not break when the first and last elements need to be removed', () => {
        assert.equal(results.length, 2)
        assert.deepEqual(results, [2,2])
    })
})

describe('removeElement edge cases', () => {
    const input = [[], 1]
    const results = removeElement(...input)
    it('should not break when passed an empty array', () => {
        assert.equal(results.length, 0)
        assert.deepEqual(results, [])
    })
})

describe('removeElement edge cases', () => {
    const input = [[1], 1]
    const results = removeElement(...input)
    it('should work when the array only has one element', () => {
        assert.equal(results.length, 0)
        assert.deepEqual(results, [])
    })
})