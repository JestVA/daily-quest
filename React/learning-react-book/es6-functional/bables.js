// functions can be passed in arrays

const messages = [
    'functions can be inserted into arrays',
    (message) => console.log(message)
]

messages[1](messages[0]) // functions can be inserted into arrays

// Resolved git authentication issue? 

const insideFunction = logger => logger('Want to print this')

insideFunction(message => console.log(message)) // 'Want to print this'

// Keeping object purity

let schools = [
    { name: 'York'},
    { name: 'New York'}
]

const updateSchool = (oldName, name, arr) => {
    return arr.map(school => {
        if (school.name === oldName) {
            return {
                ...school,
                name
            }
        } else {
            return school
        }
    })
}

let updatedSchools = updateSchool('York', 'Big York', schools)
console.log(updatedSchools[0])
console.log(schools[0])
