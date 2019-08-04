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

// Transforming an oject into an array:
let schools2 = {
     'York': 3 ,
     'New York': 2
}


const schoolArray = Object.keys(schools2).map(key => ({
    name: key,
    wins: schools2[key] 
}))

console.log(schoolArray)

// Array to Object

const colors = [
    {
        id: '-blue',
        title: 'ocean blue',
        rating: 2
    },
    {
        id: '-magenta',
        title: 'chameleon stealth',
        rating: 10
    }
]

const hashColors = colors.reduce(
    (hash, {id, title, rating}) => {
        hash[id] = { title, rating }
        return hash
    },
    {} 
)

console.log(hashColors)