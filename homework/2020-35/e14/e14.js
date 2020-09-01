let database = []
var studentId = 1
var readlineSync

function add () {
  let name = readlineSync.question('May I have student name?')
  var student = { id: studentId, name: name }
  database.push(student)
  studentId++
}
function remove () {
  var id = readlineSync.question('Give student id to remove ')
  var idToRemove = parseInt(id)
  for (var i = 0; i < database.length; i++) {
      console.log(database[i].id)
        if (database[i].id === idToRemove) {
            console.log('löytyy')
            database.splice(i, 1) 
        }
  } 
}
function display () {
  var asciitable = require("asciitable")

  var options = {
    skinny: true,
    intersectionCharacter: "x",
    columns: [
      { field: 'id', name: 'Student ID Number' },
      { field: 'name', name: 'Student Name' }
    ]
  }
  var table = asciitable(options, database)
  console.log(table)
}

function main () {
  let dbConfig = true

  while (dbConfig) {
    readlineSync = require('readline-sync')
    let options = ['Add', 'Remove', 'Display']
    let index = readlineSync.keyInSelect(options, 'Choice?')

    if (index + 1 === 1) {
      add()
    } else if (index + 1 === 2) {
      remove()
    } else if (index + 1 === 3) {
      display()
    } else if (index + 1 === 0) {
      dbConfig = false
    }
  }
}

main()

