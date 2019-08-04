// functions can be passed in arrays

const messages = [
    'functions can be inserted into arrays',
    (message) => console.log(message)
]

messages[1](messages[0]) // functions can be inserted into arrays

// Resolved git authentication issue? 

const insideFunction = logger => logger('Want to print this')

insideFunction(message => console.log(message)) // 'Want to print this'

