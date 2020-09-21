/*
function Clock () {
  const time = this
  this.time = new Date().toString()
  this.startInterval = function () {
    setInterval(function () {
      time.tick()
    }, 1000)
  }

  this.tick = function () {
    this.time = new Date().toString()
    console.log(this.render())
  }
  this.render = function () {
    return this.time
  }
}

let clock = new Clock()
//console.log(clock.render()) // outputs time 
clock.startInterval() // outputs time for every second, uses render
*/

/*
function Clock () {
  this.time = new Date().toString()
  this.startInterval = function () {
    setInterval(() => this.tick(), 1000)
  }

  this.tick = function () {
    this.time = new Date().toString()
    console.log(this.render())
  }
  this.render = function () {
    return this.time
  }
}

let clock = new Clock()
console.log(clock.render()) // outputs time
clock.startInterval() // outputs time for every second, uses render
*/

function Clock () {
  this.time = new Date().toString()
  this.startInterval = function () {
    const kopio = this.tick.bind(this)
    setInterval(kopio, 1000)
  }

  this.tick = function () {
    this.time = new Date().toString()
    console.log(this.render())
  }
  this.render = function () {
    return this.time
  }
}

const clock = new Clock()
console.log(clock.render()) // outputs time
clock.startInterval() // outputs time for every second, uses render
