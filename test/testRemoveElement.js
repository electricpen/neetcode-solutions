const { removeElement } = require('../removeElement/removeElement')
const assert = require('assert')
const { describe, it } = require('mocha')

describe('removeElement', () => {
    let input, results
    let testIndex = 0

    const testInput = [
        [[[1,2,3], 3], [1,2]],
        [[[3,2,2,3], 3], [2,2]],
        [[[], 1], []],
        [[[1], 1], []]
    ]

    beforeEach(() => {
        [input, expectedResults] = testInput[testIndex]
        results = removeElement(...input)
        testIndex++
    })
    
    it('should remove the passed in element', () => {
        assert.equal(Array.isArray(results), true)
        assert.equal(results.length, expectedResults.length)
        assert.deepEqual(results, expectedResults)
    })

    it('should not break when the first and last elements need to be removed', () => {
        assert.equal(results.length, expectedResults.length)
        assert.deepEqual(results, expectedResults)
    })

    it('should not break when passed an empty array', () => {
        assert.equal(results.length, expectedResults.length)
        assert.deepEqual(results, expectedResults)
    })

    it('should work when the array only has one element', () => {
        assert.equal(results.length, expectedResults.length)
        assert.deepEqual(results, expectedResults)
    })
})