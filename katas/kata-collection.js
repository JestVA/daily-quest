/*  
https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript
6 KYU */

function isValidWalk(walk) {
    
	const mapCoordinates = {n: 1, s: -1, e: 1, w: -1};
	const finishPosition = {n: [], s: [], e: [], w: []};
	
	walk.forEach(block => finishPosition[block].push(mapCoordinates[block])) 
	
	if(finishPosition.n.length > 0)
	{
		let north = finishPosition.n.reduce((a,c) => a += c);
		finishPosition.n = north;
	}
	if(finishPosition.s.length > 0)
	{
		let south = finishPosition.s.reduce((a,c) => a += c);
		finishPosition.s = south;
	}
	if(finishPosition.e.length > 0)
	{
		let east = finishPosition.e.reduce((a,c) => a += c);
		finishPosition.e = east;
	}
	if(finishPosition.w.length > 0)
	{
		let west = finishPosition.w.reduce((a,c) => a += c);
		finishPosition.w = west;
	}
  
	const xAxis = finishPosition.e + finishPosition.w;
	const yAxis = finishPosition.n + finishPosition.s;
	
	if(walk.length != 10)
	  return false;
	else if(yAxis != 0)
	  return false;
	else if (xAxis != 0)
	  return false;
	else return true;

}

/**
 * 6 KYU
 * https://www.codewars.com/kata/persistent-bugger/train/javascript
 */

function persistence(num)
{
	let recursive = 0;
	persist(num);
	return recursive;

	function persist(num)
	{
		while(stringifyNumAndSplit(num).length > 1)
		{
			recursive++;
			return persist(stringifyNumAndSplit(num).reduce((a,c)=>a*c));
		}

		return recursive;
	}

	function stringifyNumAndSplit(num)
	{
		return [...num.toString()];
	}

}

/**
 * 3 KYU
 * https://www.codewars.com/kata/5571d9fc11526780a000011a/train/javascript
 */

class Thing {
	constructor(name) 
	{
		this.name = name;
	}
	
	get is_a_woman() 
	{
		return this.is_a()
  	}
  
	get is_a_man() {
		return this.is_not_a()
  	}
	
	is_a() {
	  return true;
	}
	
	is_not_a(){
	  return false;
  }
	
	
  }
 