const { calPoints } = require('../baseballGame/baseballGame')
const assert = require('assert')
const { describe, it } = require('mocha')

describe('calPoints', () => {
    let input = []
    let results
    let testIndex = 0

    
    const testInput = [
        [[], 0],
        [["5","2","C","D","+"], 30],
        [["5","-2","4","C","D","9","+","+"], 27],
        [["1", "C"], 0]
    ]
    
    beforeEach(() => {
        [input, expectedResults] = testInput[testIndex]
        results = calPoints(input)
        
        testIndex++
    })

    it('should return 0 for an empty operations list', () => {
        assert.equal(results, 0)
    })
    
    it('should return the correct score', () => {
        assert.equal(typeof results, "number")
        assert.equal(results, expectedResults)
    })

    it('should return the correct score', () => {
        assert.equal(results, expectedResults)
    })

    it('should return the correct score', () => {
        assert.equal(results, expectedResults)
    })
})