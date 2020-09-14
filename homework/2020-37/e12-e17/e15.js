let user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  }
}
function sayHello () {
  user.sayHello()
}

user.sayHello()

let f = user.sayHello
f()
// Doesn't work because we're calling a method that has object.method in arguments
setTimeout(user.sayHello, 1000)

// Works because we're calling object.method last
setTimeout(sayHello, 1000)

// Changes the user object from 'Jack' to 'does it work?' because there's no timeout program keeps running so it is able to change the object before it gets printed again.
user.sayHello = function () { console.log('does it work?'); };
