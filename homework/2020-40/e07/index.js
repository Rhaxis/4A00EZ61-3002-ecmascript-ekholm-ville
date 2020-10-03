const readlineSync = require('readline-sync')
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
const fileName = readlineSync.question('Give file name: ')

function parseJson (data) {
  function func (resolve, reject) {
    const obj = JSON.parse(data)
    if ('name' in obj) {
      resolve(obj.name)
    } else {
      reject('property name not found.')
    }
  }
  const p = new Promise(func)
  return p
}
async function readFileAndParse (fileName) {
  const file = await readFile(fileName, 'utf-8')
  const parsed = await parseJson(file)
  return parsed
}
readFileAndParse(fileName).then((name) => console.log(name)).catch(msg => console.log(msg))