const { uniqueString, palindrome } = require('../Algos/problems')
const { permutation } = require('../Algos/problems')
const { urlify } = require('../Algos/problems')
const assert = require('assert')

//UNIT TEST FOR UNIQUESTRING FUNCTION

it('validates a string for all unique characters', () => {
  assert.equal(uniqueString('cat'), true)
})

//UNIT TEST FOR PERMUTATION FUNCTION

it('checks if a string is a permutation of another', () => {
  assert.equal(permutation('aab', 'aba'), true)
})

//UNIT TEST FOR PALINDROME FUNCTION
it('checks if a string is a palindrome', () => {
  assert.equal(palindrome('abba'), true)
})

//UNIT TEST FOR URLIFY FUNCTION
it("converts white space in a given string's true length to %20", () => {
  assert.equal(urlify('Mr John Smith', 13), 'Mr%20John%20Smith')
})
