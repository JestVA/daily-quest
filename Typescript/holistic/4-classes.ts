import { HasPhone, HasEmail } from "./1-basics";

// can implement interfaces
export class Contact implements HasEmail {
	email: string;
	name: string;
	constructor(name: string, email: string) {
		this.email = email;
		this.name = name;
	}
}

/**
 * 
 * private
 * public
 * protected
 */
// parameter properties
class ParamPropContact implements HasEmail {
	constructor(public name: string, public email: string) {
		// not verbose like above example
	}
}

// can have initializers (defaults)

class SomeOtherContact implements HasEmail, HasPhone {
	protected age: number = 0;
	private password: string;
	constructor(public name: string, public phone: number, public email: string) {
		this.password = Math.random().toString();
	}
}

// abstract classes

abstract class AbstractContact implements HasPhone, HasEmail {
	public abstract phone: number; // must be implemented
	constructor(public name: string, public email: string) {
	}

	abstract sendEmail(): void; // must be implemented by non-abstract subclasses
}

class ConcreteContact extends AbstractContact {
	constructor(
		public phone: number,
		name: string,
		email: string
	) {
		super(name, email)
	}

	sendEmail() {
		// blah
		console.log('Sending email...')
	}
}

