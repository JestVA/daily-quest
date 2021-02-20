interface Client {
	id?: string;
	firstName: string;
	lastName: string;
	company: string;
}

const clients: Client[] = [
	{
		id: "1",
		firstName: "Dorin",
		lastName: "Dumitrascuta",
		company: "Fintech"
	},
	{
		id: "2",
		firstName: "Code",
		lastName: "Dojo",
		company: "Super Company"
	}
];

class VipClient implements Client {
	firstName;
	lastName;
	company;

	constructor(firstName, lastName, company) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.company = company;
	}
}


