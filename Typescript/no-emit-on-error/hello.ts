//const greet = (person, date): void =>
//	console.log(`Hello ${person}, today is ${date}!`); // today is undefined!
const greet = (person: string, date: Date): void =>
	console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//greet("Dorin"); // compile with tsc --noEmitOnError hello.ts (it will not create hello.js)
//greet("Dorin", Date()); // Date() returns a string! 
greet("Dorin", new Date()); // OK!

// these 2 are equivalent, 1 with destructuring one without...
const functionTakesDestructObjectParam = ({ x, y }: { x: number; y: number }) => console.log(`${x} and ${y}`);
const functionTakesAPointObjectParam = (pt: { x: number; y: number }) => console.log(`${pt.x} and ${pt.y}`);
const printOptional = (obj: { firstName: string, surname?: string }) => console.log(`${obj.firstName}${obj.surname}`);
printOptional({ firstName: 'Dorin' });
printOptional({ firstName: 'Dorin', surname: "Dumitrascuta" });

// ok so this `optional` symbol notation also works with function parameters not only with optional object properties
const funcWithOptParam = (p1, p2?) => { };
funcWithOptParam("justone");

// type alias that is an object with x and y properties
type Point = {
	x: number;
	y?: number; // can be optional
};

const functionTakesAPointAliasTypeWithOptionalYProperty = (pt: Point) => { return pt };

// can also be an union of types
type ID = string | number;

const funcTakesID = (id: ID) => console.log(id);

// key difference of interface vs type is that interface can be extended
interface Pint {
	alchool: number;
}

// heuristic: use `interface` unless needing features from `type`

// Literal types
// useful for combining specific literals into unions

// this could be very good for defining props in React
function printText(s: string, alignment: "left" | "center" | "right") {
	//..
}

printText("Holla", "left");
printText("Holla", "centre"); // this is mega good for React props..


type Distance = number; // nice, could not do the same with interface (which is used more with object shaped type declarations)
const sorter = (a: Distance, b: Distance): -1 | 0 | 1 => a === b ? 0 : a < b ? -1 : 1;

// like here, width is destructured
interface Options {
	width: number
}

function configure(x: Options | "auto") {
	return x;
}

const optionObj1 = {
	width: 200
};
const optionObj2 = {
	length: 300
};

configure({ width: 200 }); // OK
configure(optionObj1); // OK
configure(optionObj2); // NOT OK
configure(200);
configure("auto"); // OK
configure("automatic"); // NOT OK

// Literal inference (wow, this blew my mind a bit)

const req = {
	url: "https://abc.com",
	method: "GET" // this is type String, not type "GET", hence the error below...
};

const handleRequest = (url: string, method: "GET" | "POST"): void => { };

handleRequest(req.url, req.method); // argument of type string cannot be assigned to argument of type GET | POST

// workarounds

handleRequest(req.url, req.method as "GET"); // I know this is GET... yea...

//or do this 
const req2 = {
	url: "https://abc.com",
	method: "GET" as "GET" // this will always be GET
};

handleRequest(req2.url, req2.method); // OK, method is now GET

// we can convert an entire object to be of type literals. Nice!!!
const req3 = {
	url: "https://abc.com",
	method: "GET"
} as const; // ok so now this is now readonly

handleRequest(req3.url, req3.method);

// typeof null // "object"
// we can't do typeof guard against null in Js/TS (* quirk);
// but we can check for null === null // true

// Type predicates


// global type Function
interface Fish {
	swim: Function;
}

interface Bird {
	fly: Function;
}

function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}

function isBird(pet: Fish | Bird): pet is Bird {
	return (pet as Bird).fly !== undefined;
}

// so without this factory, the type is not easily predicated.. fly is never assumed to be type Bird
function makePet(): Fish | Bird {
	return {
		swim: () => { }
	}
}

let pet = makePet();

if (isFish(pet))
	pet.swim()
else
	pet.fly();

const zoo: (Fish | Bird)[] = [makePet(), makePet(), makePet()];
const aquatics = zoo.filter(isFish); // !! nice, acts as Fish type filter...
const ornythorinc = zoo.filter(isBird);

interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: "square";
	sideLength: number;
}

type Shape = Circle | Square;

// simple area function
//function getArea(shape: Shape) {
//	if(shape.kind === 'circle')
//		return Math.PI * shape.radius ** 2;
//}

// written as a switch
function getArea(shape: Shape) {
	switch (shape.kind) {
		case "circle":
			return Math.PI * shape.radius ** 2;
		case "square":
			return shape.sideLength ** 2;
	}
}
