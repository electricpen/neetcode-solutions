const { getConcatenation } = require('../concatenationOfArray/concatenationOfArray')
const assert = require('assert')
const { describe, it } = require('mocha')

describe('Basic functionality of getConcatenation', () => {
    const input = [1, 2, 1]
    const results = getConcatenation(input)

    it('should return an array of length 2x n', () => {
        assert.equal(results.length, input.length * 2)
        assert.deepEqual(results, [1,2,1,1,2,1])
    })

    const emptyInput = []
    const emptyResults = getConcatenation(emptyInput)
    
    it('should return an empty array when input array is empty', () => {
        assert.equal(emptyResults.length, 0)
        assert.deepEqual(emptyResults, [])
    })
})