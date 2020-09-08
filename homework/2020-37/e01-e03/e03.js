function makeAdder (a) {
  function funktio (b) {
    return a + b
  }
  return funktio
}

var add5 = makeAdder(5)
var add10 = makeAdder(10)
console.log(add5(2)) // 7
console.log(add10(2)) // 12
