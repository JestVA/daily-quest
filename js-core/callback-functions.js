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


// build a function that does not make use of powerful abstractization
// makes it easier to understand why a callback function is necessary, which lives outside the function
const niceFunction = (num1, num2, someCalc) => {
  if (someCalc === 'add') {
    return num1 + num2;
  } else if (someCalc === 'multiply') {
    return num1 * num2;
  }
}
console.log(niceFunction(9, 9, 'multiply'))

// implement a sort function to act as callback function

let simpleList = [
  {
    team: 'Arsenal',
    kit: 'home',
    id: 1
  },
  {
    team: 'Chelsea',
    kit: 'away',
    id: 2
  }
];

// pass a callback function inside the sort funciton
// make use of ES6 arrow syntax for the callback function
simpleList.sort((a, b) => {
  if (a.id < b.id) {
    return -1; 
  } else {
    return 1;
  }
});
console.log(simpleList);