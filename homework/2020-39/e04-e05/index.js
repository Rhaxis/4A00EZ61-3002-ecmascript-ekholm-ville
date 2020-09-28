const HttpConnection = require('./httpconnection.js')
const url = 'http://localhost:8080/locations/'
const fetch = require('node-fetch')

// outputs the json
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
/*
// adds
let object = { lat: 60, lon: 60 }
HttpConnection.post(url, object, body => console.log(body))

// deletes (since HTTP Delete on location restful API is empty, this do not
// print anything)
HttpConnection.delete(url + "1", body => console.log(body))

// You can also do something like this, if you like, your choice!
HttpConnection.delete(url + "1", statusCode => console.log(statusCode)) // 204
*/