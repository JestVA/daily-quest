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
// function to add and remove an item and use JSON.stringify
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
const testArr = [1, 2, 3, 4, 5]
console.log(JSON.stringify(testArr))
console.log(nextInLine(testArr, 'new value'))
console.log('After: ' + JSON.stringify(testArr))
// return Boolean function
function booleans() {
    return true
}
console.log(booleans())
// return true if passed argument to function
function trueOrFalse(wasItTrue) {
    if (wasItTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
}
console.log(trueOrFalse(false))
// Comparison with the equality operator
function testEqual(val) {
    if (val == 12) {
        return 'Equal'
    }
    return 'Not equal'
}
testEqual(10)
// Comparison with strict equality operator
function testStrict(val) {
    if (val === 10) {
        return 'Equal'
    }
    return 'Not equal'
}
testStrict('10')