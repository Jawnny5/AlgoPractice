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

module.exports = {
  uniqueString
}

//currently this algorithm passes the Mocha test written, however, how would I go about prohibiting non-string data types from being accepted as valid parameters???

//Walkthrough of algorithmic logic above: The javascript function above takes in a string. We initialize two index variables, i & j. We then perform two for loops to go over the string that is passed. We evaluate through an if statement whether the value of both index i and index j are equal and if so, we allow the loop to continue. 

