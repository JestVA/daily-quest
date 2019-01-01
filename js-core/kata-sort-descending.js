const descendingOrder = s => {
	const abc = [
...s.toString().split('')]
.map(Number)
.sort((a, b) => b-a)
   return Number(abc.join(''))
 }