// KATA: https://www.codewars.com/kata/array-dot-prototype-dot-reverse/train/javascript

// This function reverses an array but returns a new one 
let newArray = []
for (let i = this.length - 1; i >= 0; i--) {
    newArray.push(this[i])
}

// This function reverses an array in place (way tougher than 7kyu lol)
function reverseArrayInPlace(arr) {
    for (let i = 0; i <= Math.floor((this.length - 1) / 2); i++) {
        let el = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = el;
    }
    return this;
}

// This is a beautiful and crazy idea to solve the same: 
Array.prototype.reverse = function() {
    
    // creates a new array 
    
    var arr = this.splice(0);  
    
    // while the length is truthy keeps doing it ( as it pops the items from the end of the array 
    // it eventually gets to length = 0 and stops )
    while(arr.length) {
      this.push(arr.pop());
    }   
    
    // get the return value of everything that was pushed in this 
    return this;
  };