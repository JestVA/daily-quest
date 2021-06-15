import { HasPhone, HasEmail } from "./1-basics";

type StringOrNumber = string | number;
type HasName = { name: string };
// self referencing type
type NumVal = 1 | 2 | 3 | NumVal[];

export interface HasInternationalPhoneNumber extends HasPhone {
	countryCode: string;
}

// describe call signatures
interface ContactMessenger1 {
	(contact: HasEmail | HasPhone, message: string) : void;
}

type ContactMessenger2 = (
	contact: HasEmail | HasPhone, message: string
) => void

// we don't need type annotations for these
const emailer : ContactMessenger1 = (_contact, _message) => {}
//const emailer : ContactMessenger2 = (_contact, _message) => {}

// construct signatures can be described
interface ContactConstructor {
	new (...args: any[]): HasEmail | HasPhone
}

// index signatures
/**
 * @example
 * {
 * 	iPhone: { areaCode: 123, num: 000960},
 * 	home: { areaCode: 123, num: 999600}
 * }
 */

interface PhoneNumberDict {
	[numberName: string] : undefined | {areaCode: number, num: number}
}

const phoneDict : PhoneNumberDict = {
	office: { areaCode: 123, num: 123 },
	home: {areaCode: 123, num: 456 },
	remote: undefined
}

phoneDict.home = {areaCode: 123, num: 999};

// can be used in combination with other types

// declarations of same interface are merged
interface PhoneNumberDict {
	home: {
		areaCode: number;
		num: number
	};
	office: {
		areaCode: number;
		num: number;
	}
}

// now we have tooltip hints for these properties
phoneDict.home // is present
phoneDict.office  // is present
phoneDict.mobile; // may be present

// type aliases vs interfaces

// types are initialized synchronously but can reference themselves
type HasNumVals = 1 | 2 | 3 | HasNumVals[];

// interfaces are initialized lazily so combined with type alias allows for recursive types

type StringVal = "a" | "b" | "c" | StringArr;
  //type StringArr = StringVal[];
interface StringArr {
	[k: number]: 'a' | 'b' | 'c' | StringVal[]
}

const x: StringVal = Math.random() > 0.5 ? 'b' : ["a"] // OK!



export default {};