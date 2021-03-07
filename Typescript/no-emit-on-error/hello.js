//const greet = (person, date): void =>
//	console.log(`Hello ${person}, today is ${date}!`); // today is undefined!
var greet = function (person, date) {
    return console.log("Hello " + person + ", today is " + date.toDateString() + "!");
};
//greet("Dorin"); // compile with tsc --noEmitOnError hello.ts (it will not create hello.js)
//greet("Dorin", Date()); // Date() returns a string! 
greet("Dorin", new Date()); // OK!
// these 2 are equivalent, 1 with destructuring one without...
var functionTakesDestructObjectParam = function (_a) {
    var x = _a.x, y = _a.y;
    return console.log(x + " and " + y);
};
var functionTakesAPointObjectParam = function (pt) { return console.log(pt.x + " and " + pt.y); };
var printOptional = function (obj) { return console.log("" + obj.firstName + obj.surname); };
printOptional({ firstName: 'Dorin' });
printOptional({ firstName: 'Dorin', surname: "Dumitrascuta" });
