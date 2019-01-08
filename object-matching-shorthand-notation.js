// Object matching shorthand notation
// ES6

const objectList = {
    name: 'Dorin',
    status: 'is learning',
    id: 1
} 

const { name, status, id } = objectList

console.log(name, status, id)
// Dorin is learning 1

// ES5

var table = {
    name2: 'Dorin',
    status2: 'is learning ES5',
    id2: 2
}

var name2 = table.name2;
var status2 = table.status2;
var id2 = table.id2;

console.log(name2, status2, id2)