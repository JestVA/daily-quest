// Manipulate arrays with push, pop, shift, unshift
const ourArray = [1, 2, 3]
const addArray = ourArray.push(['Dorin', 32])
console.log(ourArray)
const removedFromArray = ourArray.pop()
console.log(ourArray)
const removeFirst = ourArray.shift()
console.log(ourArray)
const addFirstElement = ourArray.unshift('Happy')
console.log(ourArray)
// play with local scope 
function thisIsLocalScope() {
    const myConst = 5;
    console.log(myConst);
}
thisIsLocalScope();
console.log(myConst);
// function to add and remove an item and use JSON.stringify
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
const testArr = [1, 2, 3, 4, 5]
console.log(JSON.stringify(testArr))
console.log(nextInLine(testArr, 'new value'))
console.log('After: ' + JSON.stringify(testArr))
// return Boolean function
function booleans() {
    return true
}
console.log(booleans())
// return true if passed argument to function
function trueOrFalse(wasItTrue) {
    if (wasItTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
}
console.log(trueOrFalse(false))
// Comparison with the equality operator
function testEqual(val) {
    if (val == 12) {
        return 'Equal'
    }
    return 'Not equal'
}
testEqual(10)
// Comparison with strict equality operator
function testStrict(val) {
    if (val === 10) {
        return 'Equal'
    }
    return 'Not equal'
}
testStrict('10')
// practice comparing different values
// comparison with the inequality operator != (does type conversion)
// comparison with the strict inequality operator !==
// Comparisons with the greater than / operators
// Comparisons with the greater than or equal
function testGreaterOrEqual(val) {
    if (val >= 15) {
        return '15 or over'
    }
    if (val >= 5) {
        return '5 or over'
    }
    return 'less than 5'
}
testGreaterOrEqual(200)
// comparison function with multiple ternary operators 
const testLessOrEqual = (val) => val > 10 ? 'Larger than 10' : val == 10 ? 'Exactly ten' : 'Less than 10'
// reassigning test 
const a = []
const assertEquals = a => {
    if (a == false) {
        return true
    }
    if (!a == false) {
        return true
    }
    if (!a == false) {
        return true
    }
}

// && logical 'and' operator
// || logical 'or' operator
// old 'else' example

const testElse = val => {
    let result = ''; // use let as I want to reassign value to this variable
    if (val < 5) {
        result += val;
    } else {
        result += val**val;
    }
    return result;
}
// Math.pow(5, 5)
// golf code 
const names = ['go home', 'go bust', 'robust'];
const fun = (c1, c2) => {
    if (c1 < c2) {
        return names[0]
    } else if (c1 == c2) {
        return names[1]
    } else {
        return names[2]
    }
}
console.log(fun(4, 3)) // robust
// write another switch statement
const caseInSwitch = (val) => {
    let answer = [];
    switch(val) {
        case 1:
            answer = 'alpha';
            break // use break otherwise it loops through cases and returns last value 
            console.log(answer)
        case 2: 
            answer = 'gamma';
            break
            console.log(answer)
        case 3:
            answer = 'tango'
            break
            console.log(answer)
        case 4: 
            answer = 'charlie'
            break
            console.log(answer)
        default: 
            answer = 'clever'
    }
    return answer
}
console.log(caseInSwitch(3)); // gamma

// returning boolean values from functions withot verbose if statement 
const isLess = (a, b) => a < b
console.log(isLess(23, 12))

// return early pattern from functions 

const abTest = (a, b) => {
    if (a < 0 || b < 0) { // checks if negative and if true exits the function with a return of 'undefined'
        return undefined
    }
    return ~~Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)
}
abTest(2, 2)

// *** blackjack
let count = 0 // must be declared outside the function
// when the variable was declared in the function, each time you would call the function
// it will boot with the default value, and not increment properly.
// so it did not have to rely on function scope 
const countCards = card => {
    switch(card) {
        case 'A':
        case 'K':
        case 'J':
        case 'Q':
        case 10:
            --count;
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            ++count;
            break;
    }
    return `${count} ${count >= 0 ? 'Bet' : 'Hold Bet'}` 
}
countCards(2); 
countCards(4); 
countCards(5); 
countCards('J');  
console.log(countCards(3)); // 3 Bet

/*
create an object
*/

const myObject = {
    'surface': 'smooth',
    'color': ['red', 'green', 'blue'],
    'type of': 1,
    20: 'maximum price'
}
// accessing the values with . notation
const surfaceValue = myObject.surface;
const colorChoice = myObject.color;
// with bracket notation (must use if the properties have spaces inside the name)
const typeOf = myObject['type of'];
// access object properties with variables
const surfaceType = 'surface';
const surfaceTypeValue = myObject[surfaceType];
const priceIndex = 20;
const price = myObject[priceIndex];
// updating object properties with dot notation
myObject.color = 'blue'
console.log(myObject.color)
console.log(myObject['color'])
// add new properties to an object 
myObject.length = '20 cm'
myObject['length'] = '40 cm!'
// delete properties from objects 
delete myObject.surface
// using objects for lookups
// create a lookup function
const lookUpValue = val => {
    let result = '';

    const lookup = {
        'eu': 'tu',
        'el': 'ea',
        'noi': 'ei'
    };

    result = lookup[val];
    return result;
}
console.log(lookUpValue('eu'))
// check to see if an object has the property 
const checkForProperty = checkProp => {
    if (myObject.hasOwnProperty(checkProp)) {
        return myObject[checkProp]
    } else {
        return 'Not Found'
    }
}
console.log(lookUpValue('surface'))

// manipulating complex objects
const myStorage = {
    'car': {
        'inside': {
            'glove box': 'gun',
            'passenger_seat': 'nothing'
        },
        'outside': {
            'trunk': 'not_a_problem_anymore'
        }
    } 
}
// Police: 'show me what you have in the trunk'
// Me: not a problem, sir, here it is:
myStorage.car.outside.trunk

// access nested arrays

const testArray = [
    {
        'type': 'flowers',
        'list': [
            'roses',
            'tulips',
            'bitcoins'
        ]
    },
    {
        'type': 'trees',
        list: [      // keys without quotes '' are invalid in JSON
            'pine',
            'birch',
            'Minecraft'
        ]
    }
]

// want to access 1. bitcoins and 2. Minecraft

let bitcoins = testArray[0].list[2] // 'bitcoins'
let minecraft = testArray[1].list[2] // 'Minecraft'

// make copy of an object

const objectCopy = JSON.parse(JSON.stringify(obj))

// iterate with while loops
let myArray = [];
let i = 0
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray)

// iterate with for loops
let myArray = [];
for(let i = 1; i < 6; i++) {
    myArray.push(i)
}

// iterate odd numbers with a for loop
let myArray = [];

for(let i = 1; i < 10; i += 2) {
    myArray.push(i)
}

// count backwards with a for loop

let myArray = [];
for (let i = 10; i > 0; i -= 2) {
    myArray.push(i)
}
console.log(myArray)

let myArray = [];
for (let i = 9; i >= 0; i -= 2) {
    myArray.push(i)
}
console.log(myArray)

// like reduce but ES5
let ourArray = [2, 10, 8, 20];
let ourTotal = 0;
for (let i = 0; i < ourArray.length; i++) {
    ourTotal += ourArray[i];
}
console.log(ourTotal)

// nesting for loops
const multiplyAll = arr => {
    let product = 1;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

let product = multiplyAll([[1,2],[3,4],[5,6,7]])

console.log(product)

// iterate with do... while loops

let myArray = [];
let i = 0;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray)

// generate random fractions 

const randomFraction = () => {
    return Math.random();
}
console.log(randomFraction())

// generate random whole numbers 
// between 1 and 100

const generateRandomWholeNumber = () => {
    return Math.floor(Math.random() * 101)
}
// refactor
const generateRandomWholeNumber = () => Math.floor(Math.random() * 101)

console.log(generateRandomWholeNumber());

// generate random numbers within a range
const rangeNumbers = (myMin, myMax) => {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(rangeNumbers(0, 10))

// use the parseInt function 


function convertToInt(str) {
    return parseInt(str);
}
console.log(convertToInt('1987lala'))

// use parseInt with radix 
function convertToInteger(str) {
    return parseInt(str, 2);
}
console.log(convertToInteger("1000"))

// use conditional ternary operator

const checkEqual = (a, b) => a === b ? true : false;
console.log(checkEqual(2,2))

// use nested conditionals with ternary operator

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(0));

// preventing object mutations 

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
      MATH_CONSTANTS.PI = 100;
    } catch(err) {
      console.log(err);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

// anonymous arrow functions
const anon = () => new Date();
// arrow function with param
const myConcat = (arr1, arr2) => arr1.concat(arr2);
// higher order functions
const realArray = [1, 2, -3, 4];
const squareList = arr => {
  const squareInts = arr.filter(n => Number.isInteger(n) && n > 0).map(x => x * x)
  return squareInts;
}
const result = squareList(realArray)
console.log(result)

// IIFE
const increment = (() => {
  return (number, value = 1) => {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5))

// refactor
const increment = (() => (number, value = 1) => number + value)();
console.log(increment(5, 2));
console.log(increment(5))

