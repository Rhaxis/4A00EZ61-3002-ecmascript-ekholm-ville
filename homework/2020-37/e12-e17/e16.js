let user = {
  firstName: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

let myFunction = user.sayHello;
myFunction();

let bind = user.sayHello.bind(user)
bind();


