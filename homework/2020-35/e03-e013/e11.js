let arrayCars = ['ferrari', 'lamborghini', 'lada', 'volvo']

let i
for (i = 0; i < arrayCars.length; i++) {
  console.log(arrayCars[i])
}

for (let car of arrayCars) {
  console.log(car)
}