var readlineSync = require('readline-sync')
var fs = require('fs')
const fileName = readlineSync.question('Give file name: ')
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(`file ${fileName} does not exist.`)
  } else {
    try {
      const obj = JSON.parse(data)
      if (obj.hasOwnProperty('name')) {
        console.log(obj.name)
      } else {
        console.log('file stuff.json contains json but not property name')
        console.log(data)
      }
    } catch (error) {
      console.log(`file ${fileName} does not contain json`)
    }
  }
})
