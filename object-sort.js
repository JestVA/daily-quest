const sortList = (sortBy, list) => {
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

		while(sorted[j][sortBy] > list[i][sortBy])
		{
			j++;
		}

		let before = sorted.slice(j);
		before.unshift(list[i]);
		sorted.splice(j);
		sorted = sorted.concat(before);

		continue;

	}

	return sorted;

}

sortList("a", [
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
])