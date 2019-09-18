const sortList = (sortBy, list) => {
	const hasProp = !!list.filter(obj => obj.hasOwnProperty(sortBy));
  
	if(!hasProp)
		return [];

	const sorted = [];

	for(let i=0; i < list.length; i++)
	{
		if(!sorted.length)
		{
			sorted.push(list[i]);
			continue;
		}

		let j = 0;

		while(j < sorted.length)
		{
			if(list[i][sortBy] < sorted[j][sortBy])
				j++;
			else
			{
				let before = sorted.slice(j);
				let toArrange = before.unshift(list[i]);
				let biggest = sorted.splice(j);
				let arranged = biggest.concat(toArrange);
				sorted = arranged;
				continue;

			}

		}

		sorted.push(list[i]);

		continue;

	}

	return sorted;

}