// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/solutions/javascript/all/clever
// My solution
const isDivideBy = (number, a, b) => number % a === 0 &&  number % b === 0 ?  true : false

// This is very clever
function isDivideBy(number, a, b) {
    return [a, b].every(i => number % i === 0)
  }

// Note using of every method of an array. Eliminates repeat code
// Also clever 
// Don't fully understand the || or operator 
isDivideBy = (n, a, b) => !(n % a || n % b); 

/*
Operator	Syntax	Description
Logical AND (&&)	expr1 && expr2	If expr1 can be converted to true, returns expr2; else, returns expr1.
Logical OR (||)	expr1 || expr2	If expr1 can be converted to true, returns expr1; else, returns expr2.
Logical NOT (!)	!expr	Returns false if its single operand can be converted to true; otherwise, returns true.
*/

//	!0 IS TRUE **TRICK** + use exclamation mark to evaluate to a boolean 
