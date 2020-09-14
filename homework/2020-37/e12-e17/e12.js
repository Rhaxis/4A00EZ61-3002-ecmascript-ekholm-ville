let user = {
  name: 'Jack',
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

let myfunc = user.sayHello
myfunc()

//Prints Hello undefined! because function is called instead of object.function() user.sayHello() in this instance