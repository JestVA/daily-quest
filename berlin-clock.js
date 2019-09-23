const berlinClock = time => 
{

	console.log(time);
	let seconds,
		fiveHours,
		fullHours,
		fiveMinutes,
		fullMinutes

	const timeReg = /(\d+):(\d+):(\d+)/;

	const hours = timeReg.exec(time)[1];
	const minutes = timeReg.exec(time)[2];

	seconds = timeReg.exec(time)[3] % 2 === 0 ? 'Y' : 'O';

	fiveHours = Math.floor(hours / 5);
	fullHours = hours % 5;

	fiveMinutes = Math.floor(minutes / 5);
	fullMinutes = minutes % 5; 

	// row 1, 2 & 4 have 4 posible states
	let firstRow = '';
	let secondRow = '';
	let fourthRow = '';

	for(let i = 0; i < 4; i++)
	{
		if(i < fiveHours)
			firstRow += 'R';
		else
			firstRow += 'O';
		if(i < fullHours)
			secondRow += 'R';
		else
			secondRow += 'O';
		if(i < fullMinutes)
			fourthRow += 'Y';
		else
			fourthRow += 'O';
	}

	// row 3 is quirky
	let thirdRow = '';

	for(let i = 0; i < 11; i++)
	{
		if(i < fiveMinutes)
		{
			if(i == 2 || i == 5 || i == 8)
				thirdRow += 'R';
			else 
				thirdRow += 'Y';
		}
		else
			thirdRow += 'O';
	}


	return 	seconds + '\n' + 
			firstRow + '\n' + 
			secondRow + '\n' + 
			thirdRow + '\n' + 
			fourthRow;

}