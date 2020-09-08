function doIt (salainen) {
  function inner () {
    salainen ? console.log('world') : console.log('hello')
  }
  return inner
}

doIt(false)() // outputs hello
doIt(true)() // outputs world