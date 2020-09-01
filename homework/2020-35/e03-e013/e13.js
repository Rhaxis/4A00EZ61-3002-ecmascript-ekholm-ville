function abs (number) {
  if (number < 0) {
    return number * (-1)
  } else {
    return number
  }
}

console.log(abs(-7)) // outputs 7
console.log(abs(7)) // outputs 7
