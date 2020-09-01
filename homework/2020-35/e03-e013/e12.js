var readlineSync = require('readline-sync')
var word = readlineSync.question('Please give a word the check if its a palindrome ')

var temp = word.length
for (var i = 0; i < temp/2; i++) {
  if (word[i] !== word[temp - 1 - i]) {
      console.log('Word is not a palindrome') 
      return
  }
}
console.log('Word is a palindrome')


