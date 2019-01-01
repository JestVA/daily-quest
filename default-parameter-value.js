const addNumbers = (a, b = 20, c = 4) => a + b + c 
console.log(addNumbers(1)) // 25
console.log(addNumbers(1, 2, 7)) // 10

// ES5
function addNumbersES5(a, b, c) {
    if (b === undefined)
        b = 20
    if (c === undefined)
        c = 4
    return a + b + c
}
console.log(addNumbersES5(1)) // 25
console.log(addNumbersES5(1, 2, 7)) // 10