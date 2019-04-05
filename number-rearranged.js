// Kata link: 
// https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer/train/javascript

function superSize(num){
    return +num.toString().split('').sort((a, b) => b - a).join('')
}

// What I learned: reverse() method of array

// Remember looping through array with for .. of 
for (let x of arr) {}

// Learn to use trick of empty array 
const lowercaseCount = str => (str.match(/[a-z]/g) || []).length;

// Remember this function 
// 1. first, you spread the string into an array ( no need for split )
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
