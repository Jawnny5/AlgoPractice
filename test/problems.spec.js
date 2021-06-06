const { uniqueString } = require('../Algos/problems')
const { permutation } = require('../Algos/problems')
const { urlify } = require('../Algos/problems')
const assert = require('assert')

//UNIT TEST FOR UNIQUESTRING FUNCTION

it('validates a string for all unique characters', () => {
  assert.equal(uniqueString('cat'), true)
})

//UNIT TEST FOR PERMUTATION FUNCTION

it('checks if a string is a permutation of another', () => {
  assert.equal(permutation(('awesome', 'woes'), true))
})

it('checks if a string is a palindrome', () => {
  assert.equal(uniqueString('abba'), true)
})

it('replaces spaces in a given string with %20', () => {
  assert.equal(urlify('bomb dot com'), 'bomb%20dot%20com')
})