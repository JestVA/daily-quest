const nextItem = (xs, item) => {
      
  if (Array.isArray(xs)) {
    if (xs.indexOf(item) > -1 && xs.length > 1) {
            return xs[xs.indexOf(item) + 1]
    } 

  } else if (typeof xs === 'string') {
    const handleString = xs.slice(xs.search(item) + 1, xs.search(item) + 2)
    return handleString ? handleString : undefined
  
  } else if (typeof xs === 'object') {
            
      let iterator = xs
      
      if (iterator.next() === undefined) {
        return undefined
      } else {
        return iterator.next().value + item

      }
      


  }
  
  return undefined 
}

// Best attempt: pass 14 tests, fail 4 tests