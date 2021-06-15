import { HasEmail, HasPhone } from "./1-basics";

// F arguments and return values can have type annotations
const sendEmail = (to: HasEmail) : {recipient: string, body: string} => {
	return {
		recipient: 'me' + to.email,
		body: 'you are lucky!'
	}
}

// or es5 style function
function sendMessage(to: HasPhone) : {recipient: number; body: string} {
	return {
		recipient: to.phone,
		body: 'You got scammed'
	}
}

// return types can often be inferred
const getNameParts = (contact: {name: string}) => {
	const parts = contact.name.split(/\s/g) // split whitespace
	if(parts.length > 2) {
		throw new Error('something wasn\'t split');
	}

	return {
		first: parts[0],
		middle: parts.length === 2
		? undefined 
		: parts.slice(1, parts.length).join(" "),
		last: parts[parts.length - 1]
	} 
}

// rest params
const sum = (...vals: number[]) => vals.reduce((sum, x) => sum + x, 0)

// multiple function signatures (overload signatures)
function contactPeople(method: "email", ...people: HasEmail[]) : void;
function contactPeople(method: "phone", ...people: HasPhone[]): void;

// implementation
function contactPeople(method: "email" | "phone", ...people: (HasEmail | HasPhone)[]) : void {
	if(method === 'email')
		(people as HasEmail[]).forEach(sendEmail);
	else
		(people as HasPhone[]).forEach(sendMessage)
}

contactPeople('email', {name: "", email: ""});
contactPeople('phone', {name: "", phone: 111});
//contactPeople('email', {name: '', phone: 132}) // mixing does not work

// this example uses union types
// lexical scope is part of signature
function sendMessageWithThis(this: HasPhone & HasEmail, preferredMethod: 'phone' | 'email') {
	if(preferredMethod === 'email')
		sendEmail(this);
	else if(preferredMethod === 'phone')
		sendMessage(this);
}

// it also works with intersection types
//function sendMessageWithThis(this: HasPhone | HasEmail, preferredMethod: 'phone' | 'email') {
//	if(preferredMethod === 'email')
//		sendEmail(this as HasEmail);
//	else if(preferredMethod === 'phone')
//		sendMessage(this as HasPhone);
//}

const contact = { name: "Dorin", email: '@me', phone: 123};

sendMessageWithThis.call(contact, ['email']);

function invokeSoon(cb: () => any, timeout: number) {
	setTimeout(() => cb.call(null), timeout);
}

//invokeSoon(() => sendMessageWithThis('email'), 500) // `this` is not sattisfied

// create a bound function
const boundF = sendMessageWithThis.bind(contact, 'email');
invokeSoon(() => boundF(), 500); // works!

// apply also works
invokeSoon(() => sendMessageWithThis.apply(contact, ['phone']), 500) 

export default {};
