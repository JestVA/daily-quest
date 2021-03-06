/*
Write a function that takes a date object argument (like new Date()) and returns the string “weekend” or “weekday”.
*/

// Making use of if statement 

const weekendOrWeekday = inputDate => {
    let result = inputDate.getDay()
    if (result === 0 || result === 6) {
        return `Yay, it's Weekend`
    }
    return 'Go to work!'
}

console.log(weekendOrWeekday(new Date()))

// With no if statement

// typeof weekendOrWeekday is a function 
const weekendOrWeekday = inputDate => {
    let result = inputDate.getDay()
    return weekendOrWeekday.labels[result] ||
        weekendOrWeekday.labels['default'] 
    
        /*
    you can also add the labels inside the function to make it more pure
    if you then overwrite the key value pairs in the labels object from outside the function, when you call back the function it will still have the default assigned values blocked in function scope. Acting as a mutation preventer of sort (making the label property immutable)
        */
}

// typeof weekendOrWeekday.labels is an Object
weekendOrWeekday.labels = {
    '0': 'Weekend',
    '6': 'Weekend',
    'default': 'Weekday :('
}

console.log(weekendOrWeekday(new Date()))