/* KATA LINK: https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/javascript
*/

function GetSum(a, b) {
  
    const orderedArray = Array.from(arguments).sort((a, b) => a-b);
    
    const startAt = orderedArray[0]
    
    console.log(startAt, 'this is where we start')
    
    const rangeLength = orderedArray[1] - orderedArray[0] + 1
    
    console.log(rangeLength, 'length of array')
    
    const range = (rangeLength, startAt) => [...Array(rangeLength).keys()].map(i => i + startAt)
        
    return range(rangeLength, startAt).reduce((a, b) => a + b)
    }
  // console.log(GetSum(-1, 3))