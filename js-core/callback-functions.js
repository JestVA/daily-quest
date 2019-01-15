// Get up to speed with callback functions 

// Define some simple functions
const addNumbers = (num1, num2) => num1 + num2;
const multiplyNumbers = (a, b) => a * b;

// Write a simple callback function
const coolFunction = (num1, num2, callback) => {
  if (typeof callback === 'function') {
    return callback(num1, num2);
  }
}

// Test callback function
console.log(coolFunction(1, 2, addNumbers)); // 3
console.log(coolFunction(2, 7, multiplyNumbers)); // 14

// Add another layer of abstractization

const doMath = (a, b) => {
  console.log(`${a} and ${b} are here`);
  return a ** b;
}

console.log(coolFunction(10, 11, doMath)) // "10 and 11 are here" 
// returns 10000000000

// build a function inside the other function's arguments
console.log(coolFunction(10, 11, (a, b) => {return a / b})) // 0.909090909090...


