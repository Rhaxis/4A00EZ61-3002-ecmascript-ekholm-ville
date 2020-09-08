function Person(fname, lname) {
  if (this instanceof Person) {
    this.firstName = fname
    this.lastName = lname
  } else {
    throw new TypeError("Cannot call a class as a function")
  }
}

// Without new keyword it assigns values to global/window instead of mikko
var mikko = new Person('Mikko', 'Persetireikä')
console.log(mikko.firstName)
console.log(mikko.lastName)

// Prints false with new keyword and error without new. 
console.log(this instanceof Person)