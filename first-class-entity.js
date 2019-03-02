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

















