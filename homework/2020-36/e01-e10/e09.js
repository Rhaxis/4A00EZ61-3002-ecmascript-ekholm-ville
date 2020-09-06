// Luo uuden funktion myFunc, joka tulostaa konsoliin "hello"
var myFunc = new Function('', 'console.log("hello")')

// kutsuu funktiota
myFunc.call()

/* Tämä vastaa samaa kuin
function myFunc() {
  console.log('hello')
}
myFunc()

*/
