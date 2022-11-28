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