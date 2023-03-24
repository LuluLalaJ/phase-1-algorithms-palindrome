function isPalindrome(word) {
  // Write your algorithm here
  let wordReversed = "";
  for (let i = word.length-1; i >= 0; i--) {
    wordReversed += word[i]
  }
  return wordReversed === word
}

//there are other ways - such as using reverse() method that works on an array 
//or use recursion 

/* 
  Add your pseudocode here
  - create a new string that is reversed from the input string
  * find out if there is a method that reverse the string 
  * if not, or not known:
  * set an empty string 
  * iterate through the input string from the last char to the first char
  * update the empty string with each iteration  
  - if the new string and the input are the same, return true; else, return false 

*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
