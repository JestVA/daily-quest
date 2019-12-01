let numere = 1000001;
let numara = 0;

console.time('Milion');
while(numere)
{
	console.log(numara++);
	numere--;
}
console.timeEnd('Milion');