function doubleSum(a, b) {
	return (a + b) * 2;
}

function doubleSubtraction(a, b) {
	return (a - b) * 2;
}

// all there is to codify behaviour 
function doubleOperator(f, a, b) {
	return f(a, b) * 2
}

console.log(doubleOperator(doubleSum, 10, 20))
console.log(doubleOperator(doubleSubtraction, 10, 20))

// higher order functions
// 1. Takes one or more functions as arguments
// 2. Returns a function as its result

// imperative

// Using filter()

let people = [
	{ name: "TK", age: 26 },
	{ name: "DK", age: 14 },
	{ name: "PK", age: 33 }
]

// Filter people more than 21 yrs.old

function older21(person) {
	return person.age > 21
}

function overAge(people) {
	return people.filter(older21)
}

overAge(people)


// Go through an array and return only values larger than X

function smaller(number) {
	return number < this
}

let numbers = [1, 10, 2, 73, 4]

function filterArray(x, listOfNumbers) {
	return listOfNumbers.filter(smaller, x);
}

// e.g. filterArray(3, numbers)

// map can take a function directly and use it 
let values = [1, 2, 3, -4, 5];

function updateListMap(values) {
  return values.map(Math.abs);
}

updateListMap(values); // [1, 2, 3, 4, 5]

// cool reduce example

let shoppingCart = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];

const sumAmount = (currentTotalAmount, order) => currentTotalAmount + order.amount;

function getTotalAmount(shoppingCart) {
  return shoppingCart.reduce(sumAmount, 0);
}

getTotalAmount(shoppingCart); // 120
















