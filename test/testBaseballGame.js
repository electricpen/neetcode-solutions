const { calPoints } = require('../baseballGame/baseballGame')
const assert = require('assert')
const { describe, it } = require('mocha')
const { CallTracker } = require('assert')

describe('calPoints', () => {
    const input = ["5","2","C","D","+"]
    const results = calPoints(input)

    it('should return a number', () => {
        assert.equal(typeof results, "number")
    })

    it('should return the correct score', () => {
        assert.equal(results, 30)
    })

    const input2 = ["5","-2","4","C","D","9","+","+"]
    const results2 = calPoints(input2)

    it('should return the correct score', () => {
        assert.equal(results2, 27)
    })

    const input3 = ["1","C"]
    const results3 = calPoints(input3)

    it('should return the correct score', () => {
        assert.equal(results3, 0)
    })

    const input4 = []
    const results4 = calPoints(input4)

    it('should return 0 for an empty operations list', () => {
        assert.equal(results4, 0)
    })
})