function Person (fname, lname) {
  if (this instanceof Person) {
    this.fname = fname
    this.lname = lname
  } else {
    return new Person(fname, lname)
  }
}

var obj1 = new Person('jack', 'smith')
console.log(obj1.fname)  // 'jack'

var obj2 = Person('jack', 'smith')
console.log(obj2.fname)  // 'jack'