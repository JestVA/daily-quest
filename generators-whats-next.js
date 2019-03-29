const nextItem = (xs, item) => {
      
    if (Array.isArray(xs)) {
      if (xs.indexOf(item) > -1 && xs.length > 1) {
              return xs[xs.indexOf(item) + 1]
      } 
 
    } else if (typeof xs === 'string') {
      const handleString = xs.slice(xs.search(item) + 1, xs.search(item) + 2)
      return handleString ? handleString : undefined
    
    } else if (typeof xs === 'object') {
              
        let generator = xs
        
        if (generator.next() === undefined) {
          return undefined
        } else {
          return generator.next().value + item

        }
        
//           let total = 0
//           for (let i = 0; i <= item; i++) {
//             total = generator.next(item).value
//           }  
        
//        return total

    }
    
    return undefined 
}