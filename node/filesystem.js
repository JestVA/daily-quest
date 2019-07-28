const fs = require('fs')
files = fs.readdirSync('./') // synchronous / blocking
console.log(files)

fs.readdir('./', (err, successFiles) => { // async version
    if (err) console.log(err)
    else console.log('Results async:', successFiles)
})