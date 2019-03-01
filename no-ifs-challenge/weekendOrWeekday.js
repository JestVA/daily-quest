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

const weekendOrWeekday = inputDate => {
    let result = inputDate.getDay()
    return weekendOrWeekday.labels[result] ||
        weekendOrWeekday.labels['default'] 
    
}

weekendOrWeekday.labels = {
    '0': 'Weekend',
    '6': 'Weekend',
    'default': 'Weekday :('
}

console.log(weekendOrWeekday(new Date()))