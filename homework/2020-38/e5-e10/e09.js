class Dog {
  constructor (name) {
    this.name = name
    Dog.prototype.sniffButt = function () {
      console.log(this.name + ' sniffs butt')
    }
    this.sniffButt = this.sniffButt.bind(this)
    Dog.prototype.delayedSniffButt = function () {
      setTimeout(this.sniffButt, 1000)
    }
  }
}

const spot = new Dog('spot')
const vilma = new Dog('vilma')
spot.sniffButt()
vilma.sniffButt()

spot.delayedSniffButt()
vilma.delayedSniffButt()
