const { extractMatch, pollSomeAPI, endpoint } = require('./every-file-is-module')

// Without destructurin you can get the entire exports object

/*
const methodsAPI = require('./every-file-is-module')
methodsAPI.endpoint
methodsAPI.extractMatch
methodsAPI.pollSomeAPI
*/

console.log(`Calculating ID from ${endpoint}`)
console.log(`Getting result... id is: ${ extractMatch(endpoint) }`) // careful to return the result
pollSomeAPI(endpoint)

// beautiful
// now I use these functions here 

/*

they logged:

http://request=id936
[
  '=id936',
  index: 14,
  input: 'http://request=id936',
  groups: undefined
]
..API polled with endpoint http://request=id936

*/

const greet = require('./exporting-just-function')
greet('Dumitrascuta')