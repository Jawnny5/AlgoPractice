const { uniqueString } = require('../Algos/problems')
const assert = require('assert')

//UNIT TEST FOR UNIQUESTRING FUNCTION

it('validates a string for all unique characters', () => {
  assert.equal(uniqueString('paint'), true)
})