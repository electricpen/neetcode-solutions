const { removeDuplicates } = require('../remove_duplicates_sorted_array/removeDuplicates')
const assert = require('assert')
const { describe, it } = require('mocha')

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

describe('An array with no duplicates', () => {
    const input = [1,2,3]
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

describe('An array with duplicates', () => {
    const input = [1,2,2,3]
    const results = removeDuplicates(input)
    console.log(results)

    it('should not return an array with the same length', () => {
        assert.notEqual(results.length, 4)
        assert.equal(results.length, 3)
    })
    it('should have identical contents to the input array', () => {
        assert.equal(results[0], 1)
        assert.equal(results[1], 2)
        assert.equal(results[2], 3)
    })
})