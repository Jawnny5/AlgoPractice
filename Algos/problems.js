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


function permutation(mainString, subString){
  var listOfCharacters = new Map();
  
  for (var i = 0; i < string.length; i++) {
    
    if (listOfCharacters.has(string.charAt(i))) {
      // Get number of letters, pre-increment, then set new value
      var numOfOccurances = listOfCharacters.get(string.charAt(i));
      listOfCharacters.set(string.charAt(i), ++numOfOccurances);
    } else {
      listOfCharacters.set(string.charAt(i), 1);
    }
  }
}

function palindrome(stringOne, stringTwo){
  
}



module.exports = {
  uniqueString, permutation
}

//currently this algorithm passes the Mocha test written, however, how would I go about prohibiting non-string data types from being accepted as valid parameters???

//Walkthrough of algorithmic logic above: The javascript function above takes in a string. We initialize two index variables, i & j. We then perform two for loops to go over the string that is passed. We evaluate through an if statement whether the value of both index i and index j are equal and if so, we allow the loop to continue. 


//ALGORITHM NUMBER TWO
//Implement an algorithm that evaluates two strings to see if one is a permutation(able to be derived from) of the other


