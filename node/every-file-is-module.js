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

console.log(module)

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