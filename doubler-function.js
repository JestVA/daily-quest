/*
Write the doubler function which, based on the type of its input, would do the following:

When the input is a number, it doubles it (i.e. 5 => 10, -10 => -20).
When the input is a string, it repeats every letter (i.e. 'hello' => 'hheelloo').
When the input is a function, it calls it twice.
When the input is an array, it calls itself on all elements of that array.
When the input is an object, it calls itself on all the values of that object.

*/

const doubler = input => {
	switch (typeof input) {
		case 'number':
			return input + input;
		case 'string':
			return input.split``.map(letter => letter + letter).join``
		case 'object':
			Object.keys(input). // always returns an array 
				map(keys => (input[keys] = doubler(input[keys])));
			return input;
		case 'function':
			input();
			input();
	}
}

// Solution without a conditional statement:

const doubler = input => doubler
	.operationsByTypeOf[typeof input](input);


// The new structure:

doubler.operationsByTypeOf = {
	number: input => input + input,
	string: input => input
		.split``
		.map(letter => letter + letter)
		.join``,
	function: input => {
		input()
		input()
	},
	object: input => {
		debugger;
		Object.keys(input).map(key => (input[key] = doubler(input[key])))
		return input
	}
}

// Example calls:

console.log(doubler(-10));
console.log(doubler('hey'));
console.log(doubler([5, 'hello']));
console.log(doubler({ a: 5, b: 'hello' }));
console.log(
  doubler(function() {
    console.log('call-me');
  }),
);



































