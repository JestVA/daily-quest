

// (function (exports, require, module, __filename, __dirname){

console.log(__filename)
console.log(__dirname)
console.log('hi, I\'m the module wrapper function')

// })()


const path = require('path')
const pathObj = path.parse(__filename)
const pathObjDir = path.parse(__dirname)
console.log(pathObj)
console.log(pathObjDir)

// 

const os = require('os')
const totalMemory = os.totalmem() // impure functions
const availableMemory = os.freemem() // same, every time a different output
console.log(`...from ${totalMemory} // ${availableMemory} available or ${ Math.floor(totalMemory / availableMemory) }% free memory. `)