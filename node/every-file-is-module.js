console.log(global)

/* outputs

Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  }
}

*/


/* outputs: 

Module {
  id: '.',
  path: '/Users/dori/cool-stuff/daily-quest/node',
  exports: {},
  parent: null,
  filename: '/Users/dori/cool-stuff/daily-quest/node/every-file-is-module.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/dori/cool-stuff/daily-quest/node/node_modules',
    '/Users/dori/cool-stuff/daily-quest/node_modules',
    '/Users/dori/cool-stuff/node_modules',
    '/Users/dori/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}

- so is a json 
- this is not really global
- functions and everything (variables..) are scoped to this module (private)

*/


const url = 'http://request=id936'

function getId(endpoint) {
    const match = endpoint.match(/=id\d+/)
    // console.log(match[0])
    return match[0]
}

function pollSomeAPI(url) {
    // send an HTTP request
    console.log(`..API polled with endpoint ${url}`)
}

module.exports.extractMatch = getId
module.exports.pollSomeAPI = pollSomeAPI 
module.exports.endpoint = url

console.log(module) // OK : P so now I get the correct export values when inspecting the module object - When I was logging, no export was exported yet
