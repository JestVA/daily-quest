const sortList = (sortBy, list) => {
	console.log(sortBy)
	  const hasProp = !!list.filter(obj => obj.hasOwnProperty(sortBy));
  
	  if(!hasProp)
		  return [];
	
	const sorted = [];
	let temp = [];

	  for(let i=0; i<list.length; i++)
	  {
	  debugger;
  
		if(sorted.length == 0)
		{
			sorted.push(list[i]);
			continue;
		}
	  

		if(list[i][sortBy] > sorted[i-1][sortBy])
			sorted.unshift(list[i]); // this unshift is no good here!! if index 3 is > index 2 but less than index 1, it will still push it in front of the array
		else sorted.push(list[i]);
  
	  }
	  
	  return sorted;
  
  }