import type { HasEmail } from "./1-basics";

/**
 * 
 * Generics allow us to parametrize types in the same way that functions parameterize values
 */

function wrappedValue(x: any) {
	return {
		value: x
	}
}

function wrappedValue2<K>(x: K) {
	return {
		value: x
	}
}

// type param determine the value of x
interface WrappedValue<X> {
	value: X
}

let val: WrappedValue<string[]> = { value: [] };

val.value;

// type params can have default types
interface FilterFunction<T = any> {
	(val: T): boolean
}

const stringFilter: FilterFunction<string> = val => typeof val === 'string';

//stringFilter(0) // error!
stringFilter("abc");

// but can be used with any value
const truthyFilter: FilterFunction = val => !!val

truthyFilter(0); // false
truthyFilter(1);
truthyFilter(["abc"]);
truthyFilter("") // false

function resolveOrTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
	return new Promise<T>((res, rej) => {
		const task = setTimeout(() => rej("Time's up!"), timeout);
		promise.then(val => {
			clearTimeout(task);
			res(val);
		})
	})
}

resolveOrTimeout(fetch(""), 5000);

// type params can have constraints

function arrayToDict<T extends { id: string }>(array: T[]) : { [k: string]: T } {
	const out: { [k: string] : T } = {};
	array.forEach(val => out[val.id] = val)
	return out;
}

const myDict = arrayToDict([
	{id: "a", value: "first", name: "JJ"},
	{id: "b", value: "second"}
]);

// Type params are associated with scopes, just like function arguments

function startTuple<T>(a: T) {
	return function endTuple<U>(b: U) {
		return [a, b] as [T, U];
	}
}

const myTuple = startTuple(["first"])(42); // noice!

/**
 * Generics are good when we want to describe a relationship betwen two or more types,
 * i.e., a function argument and return type
 */

interface Shape {
	draw()
}

interface Circle extends Shape {
	radius: number
}

function drawShapes1<S extends Shape>(shapes: S[]) {
	shapes.forEach(s => s.draw());
}

// unlike above, where type is not needed, this example is simpler
function drawShapes2(shapes: Shape[]) {
	shapes.forEach(s => s.draw())
}

