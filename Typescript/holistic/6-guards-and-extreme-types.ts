import { HasEmail } from "./1-basics";

// top types ( types that can hold any value )

let myAnyValue : any = 34;
let myUnknownValue : unknown = 'Hello, unknown';

myAnyValue.foo.bar.nar; // you can do anything with any
//myUnknownValue.isIt; // prop does not exist on type unknown

async function logAny(p: Promise<any>) {
    const val = await p;
    console.log("Got" + p);
}

//myUnknownValue.split(""); // oops


// built in type guards
if(typeof myUnknownValue === 'string') // type string
    myUnknownValue.split("");
if(myUnknownValue instanceof Promise) { // type Promise<any>
    myUnknownValue.then(x => console.log(x))
}

// use defined type guards
function isEmail(x: any): x is HasEmail {
    return typeof x.name === 'string' && typeof x.email === 'string'
}

if(isEmail(myUnknownValue)) {
    console.log(myUnknownValue.email, myUnknownValue.name) // type email
}

// very common guard
function isDefined<T>(arg: T | undefined): arg is T {
    return typeof arg !== 'undefined';
}

// assertion based type guards
function assertIsStringArray(arr: any[]): asserts arr is string[] {
    if(!arr) throw new Error("not an array!");
    const strings = arr.filter(i => typeof i === 'string');
    if(strings.length !== arr.length) throw new Error("Not array of strings");
}

assertIsStringArray(["abc", "def"]);

const arr: (string|number)[] = [3, '12', '21'];

assertIsStringArray(arr); // Run this...

let unknown1: unknown = 41;
let unknown2: unknown = ["a", "string", "array"];
unknown1 = unknown2; // yikes

// alternative to unknowns are branded types

interface BrandedWithA {
    _this_is_branded_with_a: "a"
}

function brandA(brand: string): BrandedWithA {
    return (brand as unknown) as BrandedWithA 
}

function unbrandBrand(brand: BrandedWithA): string {
    return (brand as unknown) as string;
}

interface BrandedB {
    _this_is_branded_with_b: "b"
}

function brandB(abc: { value: string }): BrandedB {
    return (abc as unknown) as BrandedB;
}

function unbrandB(value: BrandedB): {abc: string} {
    return (value as unknown) as {abc: string};
}

let secretA = brandA("Secret value");

let secretB = brandB({ value: "This is another secret value"});

//secretA = secretB; // can't mix them up now 

unbrandBrand(secretA);
unbrandB(secretB);

// now have original values

let revealA = unbrandBrand(secretA);
let revealB = unbrandB(secretB);

// bottom type: never
// can hold no values

//let n: never = 4; // can't assign other type to type never 

let x = "abc" as string | number;
if(typeof x === 'string') {
    x.split("");
} else if(typeof x === 'number') {
    x++;
} else {
    // x is never
    let someNever = x;
}

class UnreachableError extends Error {
    constructor(val: never, message: string) {
        super(`Some message: ${message}`);
    }
}

let y = 4 as string | number;
if(typeof y === 'string') {
    y.split(", ")
} else if (typeof y === 'number') {
    y.toFixed(2);
} else {
    throw new UnreachableError(y, "y should be a string or a number");
}
