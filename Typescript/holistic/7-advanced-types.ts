import { HasEmail, HasPhone } from "./1-basics";

// MAPPED TYPES allows us to use an interface to transform keys into values

interface CommMeth {
    email: HasEmail;
    phone: HasPhone;
    fax: { faxNum: number };
}

function contact<K extends keyof CommMeth>( 
    method: K, 
    contact: CommMeth[K] /* a mapped type, transforming key into value */ 
    ) {
        //...
}

contact("email", {name: "Foo", email: "awesome@best.com"});
contact("phone", {name: "phoneName", phone: 099960});
contact("fax", {faxNum: 999999999});

// 

type AllCommKeys = keyof CommMeth;
type AllCommValues = CommMeth[keyof CommMeth];
type AllCommValues2 = CommMeth[AllCommKeys];

// type queries
const resolvedPromiseNum = Promise.resolve(4);

type ResolveType = typeof Promise.resolve;

const x : ResolveType = Promise.resolve;

x(42).then(val => val.toPrecision(2));

// conditional types

type EventualType<T> = T extends Promise<infer S> // if T extends Promise<any>
    ? S // extratcs the type promise resolves to
    : T; // otherwise let T pass through

let a: EventualType<Promise<number>>;
let b: EventualType<number[]>;

// Built in utility types

// partial -> make all properties on an object optional

type MayHaveEmail = Partial<HasEmail>;

const might: MayHaveEmail = {};

might.email = "Abc";
might.name = "Caller";

// Pick allows us to selecte one or more properties from an object type

type HasThen<T> = Pick<Promise<T>, "then" | "catch">;

let somethingPromisy : HasThen<number> = Promise.resolve(4);

somethingPromisy.then(num => Boolean(num));

// Extract lets us obtain a subset of types that are assignable to something

type OnlyStrings = Extract<"a" | "b" | 1 | 2, string>
type OnlyNum = Extract<"a" | "b" | 1 | 2, number>

// Exclude lets us obtain a subset of types that are NOT assignable to something
type NotStrings = Exclude<"a" | "b" | 1, string>;

// Record helps us create a type with specified property keys and the same value type
type ABCPromises = Record<"a" | "b" | "c", Promise<any>>

//i.e.  {a: Promise<any>; b: Promise<any>; c: Promise<any>}