let user = {
  name: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  },

sayDelayedHello: function () {
let thisWorks = this
    // THIS WORKS
    console.log(this)
    setTimeout(function () {
      thisWorks.sayHello()
    }, 1000)
  }
}
// Prints the object and its methods first because  Hello, Jack! Because the last call is object.method
user.sayDelayedHello()
