/*
function Dog(name) {
  this.name = name
  // Changes sniffButt to refer to a string 'hello world' which is later called
  this.sniffButt = function() {
    console.log('hello world')
  }
}
*/

/*
let obj = {'name': 'jussi'}

// Replaces the sniffButt calue with given obj variable name value with bind function
function Dog(name) {
  this.name = name
  this.sniffButt = this.sniffButt.bind(obj)
}
*/
// Changes the given name in the constructor to the global object and now prints the correct names when creating new dogs
function Dog(name) {
  this.name = name
  this.sniffButt = this.sniffButt.bind(this)
}
// sniffButt is once in the memory
Dog.prototype.sniffButt = function() {
  console.log(this.name + ' sniffs butt')
}

Dog.prototype.delayedSniffButt = function() {
  setTimeout(this.sniffButt, 1000)
}

let spot = new Dog('spot')
let vilma = new Dog('vilma')
spot.sniffButt()
vilma.sniffButt()

spot.delayedSniffButt()
vilma.delayedSniffButt()