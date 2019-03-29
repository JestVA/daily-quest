// https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950
// https://www.codewars.com/kata/whats-up-next/train/javascript

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
        console.log(generator.next(item))
        return generator.next(item).value + item
        
//           let total = 0
//           for (let i = 0; i <= item; i++) {
//             total = generator.next(item).value
//           }  
        
//        return total

    }
    
    return undefined 
}