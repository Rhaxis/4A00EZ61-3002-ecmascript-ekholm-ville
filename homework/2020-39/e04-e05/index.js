const HttpConnection = require('./httpconnection.js')
const url = 'http://localhost:8080/locations/'
const fetch = require('node-fetch')

if (process.argv.includes('get')) {
HttpConnection.get(url, process.argv[3] = process.argv.slice(3), result => console.log(result))
}

if (process.argv.includes('add')) {
  let object = {lat: process.argv[3], lon: process.argv[4]}
  HttpConnection.add(url, object, result => console.log(result))
  }

if (process.argv.includes('delete')) {
  HttpConnection.delete(url, process.argv[3] = process.argv.slice(3), result => console.log(result))
}
