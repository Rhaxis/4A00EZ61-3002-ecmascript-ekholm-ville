function doIt(a, b) {
  console.log(this)
}
let object = {"key": "value"}

// first argument defines global as object variable
doIt.call(object, 5, 5)