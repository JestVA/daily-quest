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

	for(let i = 0; i < 4; i++)
	{
		if(i < fiveHours)
			firstRow += 'R';
		else
			firstRow += 'O';
	}


	return seconds + '\n' + firstRow;

}