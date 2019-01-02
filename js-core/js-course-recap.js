// Manipulate arrays with push, pop, shift, unshift
const ourArray = [1, 2, 3]
const addArray = ourArray.push(['Dorin', 32])
console.log(ourArray)
const removedFromArray = ourArray.pop()
console.log(ourArray)
const removeFirst = ourArray.shift()
console.log(ourArray)
const addFirstElement = ourArray.unshift('Happy')
console.log(ourArray)
// play with local scope 
function thisIsLocalScope() {
    const myConst = 5;
    console.log(myConst);
}
thisIsLocalScope();
console.log(myConst);