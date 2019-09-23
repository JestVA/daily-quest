const berlinClock = time => 
{
	// Extract the time with capturing groups
	const timeReg = /(\d+):(\d+):(\d+)/;

	const hours = timeReg.exec(time)[1];
	const minutes = timeReg.exec(time)[2];
	const seconds = timeReg.exec(time)[3] % 2 === 0 ? 'Y' : 'O';

	// Build our variables
	const fiveHours = Math.floor(hours / 5);
	const fullHours = hours % 5;
	const fiveMinutes = Math.floor(minutes / 5);
	const fullMinutes = minutes % 5; 

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

/* INCLUDE TESTS 
Test.assertSimilar(berlinClock("12:56:01"), 
"O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO")

Test.assertSimilar(berlinClock("00:00:00"), 
"Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO")

Test.assertSimilar(berlinClock("22:32:45"), 
"O\nRRRR\nRROO\nYYRYYROOOOO\nYYOO")
*/