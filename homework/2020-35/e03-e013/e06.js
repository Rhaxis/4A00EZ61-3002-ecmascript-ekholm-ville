var x = 3
var y = 5
var z = x + y
console.log(z)

// Works because var can be either global or function scoped.
for (z; z > 0; z--) {
  console.log('I am shrinking')
}

const i = 3

// i = i + 3;   //Does not work, variable value cannot be changed!
console.log(i)

{
  let h = 10
  console.log(h)
}

// Does not work because let variables can only be accessed inside {}
//console.log(h) 