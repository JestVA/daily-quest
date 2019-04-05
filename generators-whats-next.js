const nextItem = (xs, item) => {
  // An interesting take from this kata is how to get some values out of the parameters to see what you are testing against.
  // I was too focused on the generator function case that I ignored, was blinded to see other solutions, more general ones.
  
  /*
  For example this little code snippet:
  We know the xs param can be a sequence of any type. Why not loop through it with a console.log to see what values you are 
  up against?

  for (const i of xs) {
    console.log(i, item)
  }
  
  */
      
  if (Array.isArray(xs)) {
    if (xs.indexOf(item) > -1 && xs.length > 1) {
            return xs[xs.indexOf(item) + 1]
    } 

  } else if (typeof xs === 'string') {
    const handleString = xs.slice(xs.search(item) + 1, xs.search(item) + 2) // This was the first unnoticed bug in my code

    /*
    As .search(//) accepts a regular expression.. (string works fine as well) - what I did not realize is what happens if
    it does not find the item in the sequence? Well, .search() would return -1. And with the additions I was doing it was
    actually -1 + 1 -= 0 and was using 0 as the first index where to start slicing and hence I was getting the letter "H"
    as a test result. Did not see this. It pays to think if the code that you are writing is really doing what you think it
    is. I will be more careful. Lesson learned. 
    */

    return handleString ? handleString : undefined
  
  } else if (typeof xs === 'object') {
      if (item === undefined) {
        return undefined
      }      
      let iterator = xs
      
      if (iterator.next() === undefined) {
        return undefined
      } else {
        
          if (iterator.next().done === true) {
            return undefined
          } else if (iterator.next().done === false) {
            return iterator.next().value + item
          }

      }
      
  }
  
  return undefined 
}

// Best attempt: pass 14 tests, fail 4 tests
/*
Test Passed: Value == 4
Test Passed: Value == undefined
Test Passed: Value == undefined
Test Passed: Value == 'e'
Test Passed: Value == '!'
Test Passed: Value == undefined
Expected: undefined, instead got: 'H'
Expected: 701, instead got: 704
Test Passed: Value == 665
Test Passed: Value == 661
Test Passed: Value == 663
Expected: undefined, instead got: 663
Test Passed: Value == 663
Test Passed: Value == 662
Test Passed: Value == 665
Test Passed: Value == 662
Test Passed: Value == 662
Expected: undefined, instead got: 662
*/

// This is the solution I found on Github.. apparently, it works. I do not know for the fuck of me why it does. 
// How does it handle the *generator cases?

/*
const nextItem = (xs, item) => {
  let found = false
  let finalValue

  for (const i of xs) {
    if (found) {
      finalValue = i
      break
    }

    if (i === item) found = true
  }

  return finalValue
}
*/