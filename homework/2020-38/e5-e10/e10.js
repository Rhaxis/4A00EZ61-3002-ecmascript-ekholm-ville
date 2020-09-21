String.prototype.isPalindrome = function () {
  let word = this.toString()
  let temp = word.length
  for (var i = 0; i < temp/2; i++) {
    if (word[i] !== word[temp - 1 - i]) {
        return false
    }
  }
return true
}

console.log("saippuakauppias".isPalindrome()) // true
console.log("abc".isPalindrome()) // false
