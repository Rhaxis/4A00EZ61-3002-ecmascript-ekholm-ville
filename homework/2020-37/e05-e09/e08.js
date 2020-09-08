class Person {
  constructor (fname, lname) {
    if (this instanceof Person) {
      this.firstName = fname
      this.lastName = lname
    } else {
      throw new TypeError("Cannot call a class as a function")
    }
  }
}
// Without new keyword it assigns values to global/window instead of mikko
var mikko = new Person('Mikko', 'Persetireikä')
console.log(mikko.firstName)
console.log(mikko.lastName)

// Prints false with new keyword and error without new. 
console.log(this instanceof Person)


// BABEL VERSION 

/* 
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(fname, lname) {
  _classCallCheck(this, Person);

  if (_instanceof(this, Person)) {
    this.firstName = fname;
    this.lastName = lname;
  } else {
    throw new TypeError("Cannot call a class as a function");
  }
}; // Without new keyword it assigns values to global/window instead of mikko


var mikko = new Person('Mikko', 'Persetireikä');
console.log(mikko.firstName);
console.log(mikko.lastName); // Prints false with new keyword and error without new. 

console.log(_instanceof(void 0, Person));
*/