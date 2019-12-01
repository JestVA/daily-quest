const assembleWholeNumbers = {};

// Calculates the n! of any given number of digit args

assembleWholeNumbers.factorialOfSolution = (...digits) => 
Array(digits.length)
	.fill()
	.map((e,i) => i + 1)
	.reduce((a, c) => a *= c);


// function that returns all possible whole numbers (base 10) from any given digits (0-9)
assembleWholeNumbers.fromDigits = (...digits) => 
{	
	const seed = "9".repeat(digits.length);
	let startAt = parseInt(seed);
	const results = [];
	
	while(`${startAt}`.length >= digits.length)
	{
		results.push(startAt);
		startAt--;
	}
	
	const digitsSetString = [...new Set(digits)].join('');
	const regxString = '[' + digitsSetString + ']{' + digits.length + '}';
	const regxSetOfDigitsAndLength = new RegExp(regxString);
		
	const all = results.filter((el) => 
			el && regxSetOfDigitsAndLength.test(`${el}`));

	return all;
};

assembleWholeNumbers.fromDistinctDigits = (...digits) => 
{
	// uses anchored negative look ahead with a back reference to assert that there are no repeating characters
	const noRepeatDigit = '^(?!.*(.).*\\1)\\d{' + digits.length + '}$';
	const regxNoRepeat = new RegExp(noRepeatDigit);

	return assembleWholeNumbers
		.allPossibleNumbers(...digits)
		.filter(number => 
		number && regxNoRepeat.test(`${number}`));
};



