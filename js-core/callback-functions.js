// Get up to speed with callback functions 

// Define some simple functions
const addNumbers = (num1, num2) => num1 + num2;
const multiplyNumbers = (a, b) => a * b;

// Write a simple callback function
const coolFunction = (num1, num2, callback) => {
  return callback(num1, num2);
}

// Test callback function
console.log(coolFunction(1, 2, addNumbers)); // 3
console.log(coolFunction(2, 7, multiplyNumbers)); // 14

// Add another layer of abstractization

const doMath = (a, b) => {
  console.log(`${a} and ${b} are here`);
}

console.log(coolFunction(10, 11, doMath)) // "10 and 11 are here"


