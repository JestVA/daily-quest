// Get up to speed with callback functions 

const addNumbers = (num1, num2) => num1 + num2;
const multiplyNumbers = (a, b) => a * b;

const coolFunction = (num1, num2, addNumbers) => {
  console.log(addNumbers(num1, num2));
}
coolFunction(1, 2, addNumbers);


