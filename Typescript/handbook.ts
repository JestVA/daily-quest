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
