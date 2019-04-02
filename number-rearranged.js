// Kata link: 
// https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer/train/javascript

function superSize(num){
    return +num.toString().split('').sort((a, b) => b - a).join('')
}

// What I learned: reverse() method of array