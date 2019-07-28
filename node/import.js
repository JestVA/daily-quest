const { extractMatch, pollSomeAPI, endpoint } = require('./every-file-is-module')


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