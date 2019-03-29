// https://www.codewars.com/kata/crazy-programmer-02-insert-advertising-code/train/javascript

// Solution: 
// This is a great example how to use prototypes to solve things.
// Write your own custom implementation


var ads=
"\nNow is the time for advertisements:\n"+
"My name is myjinxin, 25 years old, Male, \n"+
"unmarried, handsome, rich, looking for\n"+
"a lovely woman as a life partner\n";


Number.prototype.toString = function () {
  if (isPrime(this)) {
    return ads + this
  } 
  
  return String(+this)

  function isPrime(value) {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false 
      }
    }
    return value > 1
  } 
  
}

