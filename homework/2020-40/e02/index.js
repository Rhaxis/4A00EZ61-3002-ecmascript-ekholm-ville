function makeCalculation (a, b) {
  function asynFunc (resolve, reject) {
    if (b !== 0) {
      setTimeout(() => {
        console.log('calculating stuff')
        const division = a / b
        resolve(division)
      }, 1000)
    } else {
      reject('cannot divide with zero')
    }
  }
  const p = new Promise(asynFunc)
  return p
}

function sendStuffToBackend (result) {
  const random = Math.floor(Math.random() * 2)
    function asynFunc (resolve, reject) {
      if (random === 1) {
        setTimeout(() => {
          console.log(`sending to backend ${result}`)
          resolve('done')
        }, 1000)
      } else {
        reject('failed to connect to backend')
      }
    }
  const p = new Promise(asynFunc)
  return p
}

// make the calculation that takes time and when ready, invoke the
// arrow function.


makeCalculation(10, 5)
  .then(division => sendStuffToBackend(division))
    .then(msg => console.log(msg))
    .catch(errormsg => console.log(errormsg))
