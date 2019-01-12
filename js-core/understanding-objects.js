// Understanding Objects in Javascript aka GROKING OBJECTS :D

const myObject = {
  name: 'Gimli', 
  class: 'Paladin', 
  weapon: 'Hammer', 
  greet: function() {
    return console.log(`Hi, I'm ${this.name}`)
    }
  }

myObject.age = 31
// 31

myObject.fight = function() {
	return `${this.name} attacks with a ${this.weapon}.`;
}
// ƒ () {
// 	return `${this.name} attacks with a ${this.weapon}.`;
// }

myObject.fight()
// "Gimli attacks with a Hammer."

myObject.weapon = "battle axe"
// "battle axe"

myObject.weapon
// "battle axe"

delete myObject.weapon

myObject
// {name: "Gimli", class: "Paladin", greet: ƒ, age: 31, fight: ƒ}

myObject.fight()
// "Gimli attacks with a undefined."



for (let key in myObject) {
	console.log(myObject[key]);
}

/* 
Gimli
Paladin
ƒ () {
	return console.log(`Hi, I'm ${this.name}`)
	}
31
ƒ () {
	return `${this.name} attacks with a ${this.weapon}.`;
}
*/



for (let key in myObject) {
	console.log(key + ':', myObject[key])
}

/*
name: Gimli
class: Paladin
greet: ƒ () {	return console.log(`Hi, I'm ${this.name}`)}
age: 31
fight: ƒ () {	return `${this.name} attacks with a ${this.weapon}.`}
*/

Object.keys(myObject)
// (5) ["name", "class", "greet", "age", "fight"]