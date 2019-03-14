/*
We want the total amount of all books in our shopping cart. Simple as that. 
*/

let shoppingCart = [
  { productTitle: "Functional Programming", type: "books", amount: 10 },
  { productTitle: "Kindle", type: "eletronics", amount: 30 },
  { productTitle: "Shoes", type: "fashion", amount: 20 },
  { productTitle: "Clean Code", type: "books", amount: 60 }
]

const byBook = (order) => order.type === 'books'
const getAmount = (cart) => cart.amount
const sumAmount = (acc, amount) => acc + amount

function getTotalAmount(shoppingCart) {
	return shoppingCart
		.filter(byBook)
		.map(getAmount)
		.reduce(sumAmount, 0)
}