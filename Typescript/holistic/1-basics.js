"use strict";
exports.__esModule = true;
var x = 'Hello world';
x = 'hello Moon';
//x = 43; // error! 
var y = 'Hello world'; // type is 'hello world'
//let z;
//z = 41;
//z = 'abc'; // z is any
var z;
z = 41;
//z = 'abc' // error!
var na = [];
na.push(23);
//na.push('abc') // error!
var tupleStuff = [123, 'abc'];
//tupleStuff = ['abc', 123] // Error! 
var xy = [32, 31]; // number array
var xz = [22, 21]; // ok! 
var cc;
cc = { house: 1, street: 'Dace Road' };
// cc = { house: 1 } // Errro! missing property street
var withOptional;
withOptional = { house: 1 };
var newAddress = {
    house: 28
};
var contactInfo = Math.random() > 0.5 ? {
    name: 'blah',
    email: 'blah@nah'
} : {
    name: 'foo',
    phone: 1234
};
contactInfo.name; // can access the common property
// intersection types
var anotherContact = {
    name: 'foo',
    email: 'bar@',
    phone: 999
};
anotherContact.name; // can access any prop
anotherContact.email;
anotherContact.phone;
var zzz = {};
exports["default"] = {};
