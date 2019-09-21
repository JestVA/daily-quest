// {} sort algoritm

const sortList = (sortBy, list) => {
	console.log(sortBy)
  console.log(list)
  const hasProp = !!list.filter(obj => obj.hasOwnProperty(sortBy));

	if(!hasProp)
		return [];

	let sorted = [];

	for(let i=0; i < list.length; i++)
	{
		if(!sorted.length)
		{
			sorted.push(list[i]);
			continue;
		}
		debugger;
		
		let j = 0;
		let shouldPush = null;
		
		while(sorted[j][sortBy] > list[i][sortBy])
		{
			if( (j + 1) < sorted.length)
				j++;
			else
			{
				shouldPush = true;
			 	break;
			}
		}
		
		if(shouldPush)
			sorted.push(list[i])
		else
		{
			const before = sorted.slice(j);
			before.unshift(list[i]);
			sorted.splice(j);
			sorted = sorted.concat(before);
		}

		continue;

	}

	return sorted;

}

// Test green

/*
sortList("a", [
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
])
*/

// Test red

/*
[ { a: 4, b: 3 },
  { a: 2, b: 2 },
  { a: 3, b: 40 },
  { a: 1, b: 12 } ]
*/

// WOw! 
sortList("a", [
	{"a": 1 },
	{"a": 3 },
	{"a": -2, "b": 40},
	{"a": 0}, {"a": -10},{"a": 24},{"a": 44},{"a": 0.4},{"a": 4.29}
  ]);

// the "conformist formula sugar is now:"
const sortList = (sortBy,a) => a.sort((a,b) => b[sortBy]-a[sortBy])

// and an even older version
function sortList (sortBy, list) {
	return list.sort((l, r) => {
	  if (l[sortBy] < r[sortBy]) return 1
	  if (l[sortBy] > r[sortBy]) return -1
	  return 0
	});
}
