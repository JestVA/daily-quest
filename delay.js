/*
Will invoke the provided function with the specified delay
*/

// ES6

const delay = (func, time, ...argList) => setTimeout(func, time, ...argList)

const printIt = string => console.log(string)

delay(printIt, 3000, '3 seconds have passed until this was printed')


// setTimeout(printIt, 2000)