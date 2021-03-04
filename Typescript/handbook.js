/*
    Basic Types
*/
// Boolean
let isDone = false;
// Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let big = 100n;
// String
let colour = "blue";
colour = 'red';
let fullName = 'Dorin Dumitrascuta';
let age = 34;
let sentence = `My name is, ${fullName}.
I am ${age} years old.`;
// Array
let listAsTypeWithLiteral = [1, 2, 3];
let listAsGeneric = [1, 2, 3];
// Tuple
let x;
x = ['hello', 10]; // OK
//x = [10, 'hello'] // wrong
let y; // types inside the tuple need not be the same
y = ['ab', 'cd']; // OK
console.log(x[0].substring(1)); // OK, because element at index 0 is type string
//console.log(x[1].substring(1)); // wrong
//x[2]; // wrong, tuple has length of 2 accessing third element can't be done
//x[5].toString(); // wrong, object is possibly undefined
// Enum
// they auto increment, or increment from starter, or can be set for all values
var Statuses;
(function (Statuses) {
    Statuses[Statuses["Sold"] = 10] = "Sold";
    Statuses[Statuses["Exchanged"] = 11] = "Exchanged";
    Statuses[Statuses["Completed"] = 12] = "Completed";
})(Statuses || (Statuses = {}));
const invoice = Statuses.Completed;
// no need to use _.invert anymore, we can do
const invoiceStatus = Statuses[invoice];
console.log({ invoice, invoiceStatus }); // logs { invoice: 12, invoiceStatus: 'Completed' }
// Unknown
// a variable that could be anything
let notSure = 4;
notSure = "I am now string";
notSure = false;
console.log(notSure);
// can be narrowed down to something more specific, that Typescript will infer
if (notSure === false) {
    const aBoolVal = notSure; // can only be declared inside a block
    console.log({ aBoolVal, notSure }); // narrows down type
    //const aString: string = notSure; // type boolean is not assignable to type string
}
console.log({ something });
//const surelyANum : number = something; // can't assign unknown type to number
if (typeof something === "string") {
    const asAString = something; // something is now string
    //const actuallyABoolFalseString: boolean = something; // type string not assignable to type string! ha!
    console.log(asAString); // knows it is string
}
