// ^^^^^ //

const list = {
	name: "Selenium",
	status: "dopamine",
	id: 2
}

const { name, status, id } = list

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const a = ([name, val]) => console.log(name, val)
a(["Dorin", 32]); 


const b = ({name: n, val: v}) => console.log(n, v)
b({name: "Dorin", val: 32});


const c = ({name, val}) => console.log(name, val)
c({name: "Dorin", val: 32})


// find last 

const find_last = (A, F) => A.filter(F).slice(-1)[0];
find_last([2, 4, 6, 8], n => n%4 ===2)
