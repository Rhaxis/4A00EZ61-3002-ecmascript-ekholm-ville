function helper() {
  user.sayHello()
}
let user = {
  name: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function() {
    setTimeout(helper, 1000)
  }
}
user.sayHello()

// Works because we're calling object.method last with the helper function
user.sayDelayedHello()
