function doIt(a, b) {
  console.log(this)
}
let object = {"key": "value"}

// difference between apply and call is syntax. Apply arguments are in array
doIt.apply(object, [5,5])