class Person {
  constructor(name) {
    this.name = name
    this.drinkBeer = function () {
      console.log(this.name + " drinks beer")
    }
  }
  // Using this its only once in the memory and can be called with multiple different objects
  sayHello() {
    console.log('hello from ' + this.name)
  }
}
// Say hello is now twice in the memory because its introduced in the constructor and called with both objects
let jack = new Person('jack')
jack.sayHello()
let tina = new Person('tina')
tina.sayHello()


