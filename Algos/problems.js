//### ALGORITHM NUMBER ONE

//### Implement an algorithm to determine if a string has all unique characters. 
//    what if you cannot use aditional data structures?

function uniqueString(string){
  let i, j
  for(i = 0; i < string.length; i++){
    for(j = 0; j < string.length; j++){
      if(i == j){
        continue
      }
      if(string[i] == string[j]){
        return false
      }
    }
  }
  return true
}

//currently this algorithm passes the Mocha test written, however, how would I go about prohibiting non-string data types from being accepted as valid parameters???
//Walkthrough of algorithmic logic above: The javascript function above takes in a string. We initialize two index variables, i & j. We then perform two for loops to go over the string that is passed. We evaluate through an if statement whether the value of both index i and index j are equal and if so, we allow the loop to continue. 

// ALGORITHM TWO: Implement logic that checks two strings to see if one is a permutation of the other
function permutation(str1, str2){
   // if different lengths, return false
   if (str1.length !== str2.length) {
    return false;
  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = str1.split('').sort().join('');
    var sortedStringTwo = str2.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
}
  
//ALGORITHM THREE: Check a given string to see if it is a palindrome
function palindrome(str){

  let reg = /[\W_]/ //regular expression for nonalphanumeric characters
  let lowerCaseStr = str.toLowerCase().replace(reg, '')
  let reversedStr = str.split().reverse().join()

  if(reversedStr === lowerCaseStr){
    return true
  } else return false 
}

//ALGORITHM NUMBER FOUR: Write a function that replaces all "spaces" in a string with %20 like a URL
function urlify(s, n){
  let out = '';
  let chars = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c !== ' ') {
      chars++;
    }
  }

  let spaces = n - chars;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === ' ' && spaces > 0) {
      out += '%20';
      spaces--;
    } else if (c !== ' ') {
      out += c;
    }
  }
  //if n is not yet reached and there are still spaces left
  while (spaces > 0) {
    out += '%20';
    spaces--;
  }

  return out;
}

//ALGORITHM FIVE Given an Array find the subarray that returns the largest sum
//For example given let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
//Output should be [5, 3, -7, 4, 5, 6]

function largestSubArray(array){
  let maxSoFar = array[0]
  let maxEndingHere = array[0]

  for (let i = 1; i < array.length; i++){
    maxEndingHere = Math.max(maxEndingHere + array[i], array[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  return maxSoFar
}

//ALGORITHM SIX. Given a string, implement an algorithm that compresses the string by
//returning the charaacter and the character count. If there letter has a count of one
//do not return the count, only the character
function compression(str){
  let compressed = ''
  let splitStr = str.split('')
  for(let i = 0; i < splitStr.length; i++){
    let charCount = 1
    let current = splitStr[i]
    while(i < splitStr.length - 1 && current === splitStr[i + 1]){
      charCount++
      i++
    }
    if(charCount == 1){
      compressed += current
    } else {
      compressed += current + charCount
    }
  }
  return compressed
}




module.exports = {
  uniqueString, permutation, palindrome, urlify, largestSubArray,
  compression
}





