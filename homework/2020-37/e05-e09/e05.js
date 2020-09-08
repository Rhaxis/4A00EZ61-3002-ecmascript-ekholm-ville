function doIt() {
  console.log(this)
  console.log(this == global)
  x = 10
}

doIt()

console.log(x)