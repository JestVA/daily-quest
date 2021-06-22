/**
 * 
 * Identifiers (variable, class, function, interface)
 * can be associated with three things: value, type and namespace
 */

function foo() {};
interface bar {};
namespace baz {
    export const biz = "hello";
}

// how to test for a value

const x = foo; // value position
const y : bar = {}; // type position
baz; // namespace

export { foo, bar, baz }; // all are exportable/importable

// functions and variables are purely values. Their types can be extracted using type queries
const xx = 4;
const yy: typeof xx = 4; // type query is done in LHS

// Interfaces are purely types

interface Address {
    street: string;
}

//let willErr = Address; // refers to type but used as a value here, Error!
let val : Address = {street: "northfolk"};

// Classes are both types _and_ values

class Contact {
    name: string;
}

const contactClass = Contact; // factory for creating instances
const contactInstance: Contact = new Contact(); // relates to instance

// declarations with the same name can be merged to occupy the same identifier 

class Album {
    label: Album.AlbumLabel = new Album.AlbumLabel();
}

namespace Album {
    export class AlbumLabel {}
}

interface Album {
    artist: string;
}

let al : Album; // type test

let alValue = Album;

export { Album }; // exports class, interface, and namespace

// namespaces can have their own slow and are also values

// they can be merged with classes

class AddressBook {
    contacts!: Contact[] 
}

namespace AddressBook {
    export class ABContact extends Contact {} // inner class
}

const ab = new AddressBook();

ab.contacts.push(new AddressBook.ABContact());

// or functions

function format(amt: number) {
    return `${format.currency}${amt.toFixed(2)}`;
}

namespace format {
    export const currency: string = "$";
}

format(2.314); // $2.31 (this formatter function is awesomez)

format.currency; // $