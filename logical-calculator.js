// My solution 
// Link to kata: https://www.codewars.com/kata/logical-calculator/train/javascript

const logicalCalc = (array, op) => array.reduce((a, c) => op === "AND" ? a && c : op === "OR" ? a || c : a ? !c : c) 

// Learn that Js does not have a native XOR operator. However this can be achieved through multiple means,
// easiest expression being a ? !c : c ternary operator expression

// Very good article here: http://www.howtocreate.co.uk/xor.html

/*

Below is a nice solution upvoted, which I also had in mind. 
Using a dict to map values to functions. My mistake was to not include\
a function as a value. Instead I was passing a logical operator 
which was prompting me with an error.

var ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}

function logicalCalc(array, op){
  return array.reduce(ops[op]);
}

Second:

I also think this is very clever:

  var op = {AND:"&&",OR:"||",XOR:"!="}[op];
  return array.reduce((a,b)=>eval(`${a}${op}${b}`))
}

Using it in conjunction with eval it evaluates the string to the correct logical operator.

Like this:
let AND = '&&'
undefined
let n1 = true
undefined
let n2 = false
undefined
eval(`${n1}${AND}${n2}`)
false
*/