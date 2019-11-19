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
 * 4 KYU
 * https://www.codewars.com/kata/snail/train/javascript
 */

const snail = array =>
{
	// const action = action.nextMove = (coords) => 
	// {
	// 	newCoords = coords.map(coord => )


	// 	action.moves.push(newCoords)
	
	
	// }
	
	const moveState = {};
	
	const stareaInitiala = [1, 1, 1, 1]; // procedure 1 
	
	const proceduri = {
		"procedura_1": [1, 1, 1, 1],
		"procedura_urmatoare": []
	}
	

	createAGoodDict = {}

	const flatMatrix = arr.flatMap(x => x);
	
	const flatMatrixLength = flatMatrix.length;
	
	if(flatMatrixLength === 0)
		return [];
	


	const decide = (action) => 
	{
		if(action.type == "procedura_1")
		{
		
		}

		action.nextMove = (coords) => 
		{
			newCoords = coords.map(coord => )


			action.moves.push(newCoords)
		
		
		}
		
	}
	// Can be an [] like this:
	// array = [[1,2,3],[4,5,6],[7,8,9]]
	// result = [1,2,3,6,9,8,7,4,5]

	

	// simulate the phisics of the snail
	// it can move only ahead until it finds obstacle and only right when it found obstacle
	// the start array is always traversed to the max and snail never returns in it
	
	// at each new step, snail has 3 choices:
		// to a step ahead
		// to go a step right
		// to stop
	
	
	


	

	const move = (history, position) =>
	{

	}




	// should return an []
	// return; 
}

function snail(arr) 
{
	const snailAt = i + 1
	


}

const game = []