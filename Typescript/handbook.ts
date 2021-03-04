/*
	Basic Types
*/

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// String
let colour: string = "blue";
colour = 'red';
let fullName: string = 'Dorin Dumitrascuta';
let age: number = 34;
let sentence: string = `My name is, ${fullName}.
I am ${age} years old.`;

// Array
let listAsTypeWithLiteral: number[] = [1, 2, 3];
let listAsGeneric: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ['hello', 10]; // OK
//x = [10, 'hello'] // wrong
let y: [string, string]; // types inside the tuple need not be the same
y = ['ab', 'cd']; // OK
console.log(x[0].substring(1)); // OK, because element at index 0 is type string
//console.log(x[1].substring(1)); // wrong
//x[2]; // wrong, tuple has length of 2 accessing third element can't be done
//x[5].toString(); // wrong, object is possibly undefined

// Enum
// they auto increment, or increment from starter, or can be set for all values
enum Statuses {
	Sold = 10,
	Exchanged,
	Completed
}

const invoice: Statuses = Statuses.Completed;

// no need to use _.invert anymore, we can do

const invoiceStatus: string = Statuses[invoice];

console.log({ invoice, invoiceStatus }); // logs { invoice: 12, invoiceStatus: 'Completed' }

// Unknown
// a variable that could be anything
let notSure: unknown = 4;
notSure = "I am now string";
notSure = false;

console.log(notSure);

// can be narrowed down to something more specific, that Typescript will infer
if (notSure === false) {
	const aBoolVal: boolean = notSure // can only be declared inside a block
	console.log({ aBoolVal, notSure }) // narrows down type
	//const aString: string = notSure; // type boolean is not assignable to type string
}

declare const something: unknown;

//console.log({ something }); // something is not defined! declaration does not define variable, but lets types be infered later or transfered

//const surelyANum : number = something; // can't assign unknown type to number

if (typeof something === "string") {
	const asAString: string = something; // something is now string

	//const actuallyABoolFalseString: boolean = something; // type string not assignable to type string! ha!

	console.log(asAString); // knows it is string
}

// Any