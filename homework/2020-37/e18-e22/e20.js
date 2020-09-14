let user = {
  name: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // It creates a hidden variable _this = this and the actual call is _this.sayHello() and the function is no longer anonymous
    setTimeout(() => { this.sayHello() }, 1000)
    //  this.sayHello()
    //}, 1000
  }
}
user.sayDelayedHello()
