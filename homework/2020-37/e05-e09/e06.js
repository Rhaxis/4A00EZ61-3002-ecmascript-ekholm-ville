function Person(fname, lname) {
this.firstName = fname
this.lastName = lname

}

// Without new keyword it assigns values to global/window instead of mikko
var mikko = new Person('Mikko', 'Persetireikä')

console.log(mikko.firstName)
console.log(mikko.lastName)

// Prints false with new keyword and error without new. 
console.log(this instanceof Person)