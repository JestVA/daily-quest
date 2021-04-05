/*
    Basic Types
*/
// Boolean
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//let big: bigint = 100n;
// String
var colour = "blue";
colour = 'red';
var fullName = 'Dorin Dumitrascuta';
var age = 34;
var sentence = "My name is, " + fullName + ".\nI am " + age + " years old.";
// Array
var listAsTypeWithLiteral = [1, 2, 3];
var listAsGeneric = [1, 2, 3];
// Tuple
var x;
x = ['hello', 10]; // OK
//x = [10, 'hello'] // wrong
var y; // types inside the tuple need not be the same
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
var invoice = Statuses.Completed;
// no need to use _.invert anymore, we can do
var invoiceStatus = Statuses[invoice];
console.log({ invoice: invoice, invoiceStatus: invoiceStatus }); // logs { invoice: 12, invoiceStatus: 'Completed' }
// Unknown
// a variable that could be anything
var notSure = 4;
notSure = "I am now string";
notSure = false;
console.log(notSure);
// can be narrowed down to something more specific, that Typescript will infer
if (notSure === false) {
    var aBoolVal = notSure; // can only be declared inside a block
    console.log({ aBoolVal: aBoolVal, notSure: notSure }); // narrows down type
    //const aString: string = notSure; // type boolean is not assignable to type string
}
//console.log({ something }); // something is not defined! declaration does not define variable, but lets types be infered later or transfered
//const surelyANum : number = something; // can't assign unknown type to number
if (typeof something === "string") {
    var asAString = something; // something is now string
    //const actuallyABoolFalseString: boolean = something; // type string not assignable to type string! ha!
    console.log(asAString); // knows it is string
}
var str = getValue("mystring");
// Void
// the absence of any type at all, mostly used with functions that do not return anything
function warnUser() {
    console.log("I have warned u...");
}
// Null and Undefined 
// they are subtypes of all other types
var u = undefined; // not much else you can assign here
var n = null; // not much else you can assign here
// we think about null and undefined as subtypes
// -- strictNullChecks flag (null and undefined can only be assigned to unknown and any types, and in somce cases undefined can be assigned to void)
// Never
// does not have a reachable return
function error(message) {
    throw new Error(message);
}
// inferred never
function fail() {
    return error("Something failed");
}
// no reacheable end point
function infiniteLoop() {
    while (true) { }
}
create({ prop: 0 }); // ok
//create("programmer") // string not assignable to object
//create(false) // boolean not assignable to type object
// YEEES, enabling the flag, worked!
create(undefined); // should be `undefined is not a subset of null`
// ok so for above example I need --strict-null-checks flag enabeld
var myVar = null;
myVar = null;
myVar = undefined;
myVar = 4;
// Type assertions
var someValue = "Am a string";
var strLength = someValue.length;
var strLength2 = someValue.length; // this is equivalent of the as version, but can't be used with JSX!!
// making room for good overload
function len(x) {
    return x.length;
}
function getDB() {
    return { filterUsers: function () { return [{ isAdmin: function () { return true; } }, { isAdmin: function () { return false; } }]; } };
}
;
var db = getDB();
var admins = db.filterUsers(function () {
    return this.isAdmin();
});
function safeParse(s) {
    return JSON.parse(s);
}
var beCareful = safeParse("/hexa + eval(true)");
