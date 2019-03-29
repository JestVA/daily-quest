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