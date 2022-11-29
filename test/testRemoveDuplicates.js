const { removeDuplicates } = require('../removeDuplicatesSortedArray/removeDuplicates')
const assert = require('assert')
const { describe, it } = require('mocha')

const unique = (list) => {
    results = new Set(list)
    return Array.from(results)
}

const duplicateInputs = [
    [1,2,2,3],
    [1,1,2],
    [0,0,1,1,1,2,2,3,3,4]
]

const nonDuplicateInputs = [
    [1],
    [1,2],
    [1,2,3],
    [1,2,3,4,5]
]

describe('Basic functionality of removeDuplicates', () => {
    const results = removeDuplicates([1,2,3,4,5])

    it('should return an array', () => {
        assert.equal(Array.isArray(results), true)
    })
})

describe('When input array is empty', () => {
    const input = []
    const results = removeDuplicates(input)

    it('should return an empty array', () => {
        assert.equal(results.length, 0)
    })
})

nonDuplicateInputs.forEach(input => {
    describe('An array with no duplicates', () => {
        const nonMutatedInput = [...input]
        const results = removeDuplicates(input)
    
        it('should return an array with the same length', () => {
            assert.equal(results.length, input.length)
        })
        it('should have identical contents to the input array', () => {
            input.forEach((element, index) => {
                assert.equal(results[index], element)
            })
        })
    })
})

duplicateInputs.forEach(input => {
    describe('An array with duplicates', () => {
        const nonMutatedInput = [...input]
        const results = removeDuplicates(input)
    
        it('should not return an array with the same length', () => {
            assert.notEqual(results.length, nonMutatedInput.length)
            assert.equal(results.length, unique(input).length)
        })
        it('should have identical contents to the input array', () => {
            assert.deepEqual(results, unique(input))
        })
    })    
})