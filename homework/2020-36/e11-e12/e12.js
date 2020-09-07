function copy (fileToCopy, newFileName = 'copy.txt') {
  const fs = require('fs')
  fs.readFile(fileToCopy, 'utf-8', (err, data) => {
    if (err) {
      console.log('error')
    } else {
      fs.writeFile(newFileName, data, (err) => {
        if (err) {
          console.log('error')
        } else {
          console.log('success')
        }
      })
    }
  })
}

copy(process.argv[2], process.argv[3])
