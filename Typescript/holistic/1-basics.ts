let x = 'Hello world';
x = 'hello Moon';
//x = 43; // error! 
const y = 'Hello world'; // type is 'hello world'
//let z;
//z = 41;
//z = 'abc'; // z is any
let z : number;
z = 41;
//z = 'abc' // error!

let na:number[] = [];
na.push(23);
//na.push('abc') // error!
let tupleStuff : [number, string] = [123, 'abc']
//tupleStuff = ['abc', 123] // Error! 

const xy = [32, 31]; // number array
const xz: [number, number] = [22, 21]; // ok! 

let cc : { house: number, street: string };
cc = { house: 1, street: 'Dace Road' };
// cc = { house: 1 } // Errro! missing property street

let withOptional : { house: number, street?: string };
withOptional =  { house: 1 };

interface Address {
	house: number;
	street?: string;
}

let newAddress: Address = {
	house: 28
}

// union types

export interface HasEmail {
	name: string;
	email: string;
}

export interface HasPhone {
	name: string;
	phone: number;
}

let contactInfo : HasEmail | HasPhone = Math.random() > 0.5 ? {
	name: 'blah',
	email: 'blah@nah'
} : {
	name: 'foo',
	phone: 1234
}

contactInfo.name // can access the common property

// intersection types

let anotherContact : HasPhone & HasEmail = {
	name: 'foo',
	email: 'bar@',
	phone: 999
}

anotherContact.name // can access any prop
anotherContact.email;
anotherContact.phone;

const zzz : any = {} as never;

export default {};

