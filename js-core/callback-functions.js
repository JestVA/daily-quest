// Get up to speed with callback functions 

const addNumbers = (a, b) => a + b;
const multiplyNumbers = (a, b) => a * b;

const coolFunction = (num1, num2, doSomething) => {
  console.log(doSomething(num1, num2));
}
coolFunction(addNumbers(1, 2));


