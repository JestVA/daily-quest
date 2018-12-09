// This code assumes you have a budget and you want to buy phones and accessories until your budget runs out.

const TAX_RATE = 0.08;
const phonePrice = 116;
const accessoryPrice = 9.99;
const spendingThreshold = 500;
var phonePurchase = 0;
var bankAccount = 1600;
// calculate the price of items bought adding tax of 8%
function calculateTax(amt) {
	amt = amt + (amt * TAX_RATE);
	return amt;
}
// Returns the phonePurchase properly formatted
function formatAmount() {
	return "$" + phonePurchase.toFixed(2);
}
// As long as the bank account balance is greater than 0 you should buy 
// phones, and as long as the spending threshold is not reached, you should
// also buy an accessory with each phone

// We do the math using our function to pass in added tax and compare that
// against our account balance. 
while ( bankAccount - calculateTax(phonePurchase) > 0 ) {
	if (spendingThreshold - calculateTax(phonePurchase) >= 0 ) {
		phonePurchase = phonePurchase + accessoryPrice + phonePrice;
		console.log("I got a phone and an accessory")
	} else {
		phonePurchase = phonePurchase + phonePrice;
		console.log("I reached my threshold and only buying phones");
	}
	console.log(formatAmount(phonePurchase));
}