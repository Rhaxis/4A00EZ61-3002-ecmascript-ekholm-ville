function doIt () {
  function inner () {
    console.log('hello world')
  }
  return inner
}

let f = doIt()
f()
