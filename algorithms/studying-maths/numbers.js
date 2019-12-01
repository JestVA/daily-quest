// some tests
	// repeat digit in sequence: 1, 1, 1
		// should create 1 whole number 
	// include 0 digit in sequence: 0, 1, 2
		// should create 4 whole numbers

const assembleWholeNumbers = {};

// Calculates the n!  

assembleWholeNumbers.numberOfPossiblePermutations = (...digits) => 
Array(digits.length)
	.fill()
	.map((e,i) => i + 1)
	.reduce((a, c) => a *= c);

// function that returns all possible whole numbers (base 10) from any given digits (0-9)
assembleWholeNumbers.allPossibleNumbers = (...digits) => 
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
	
	const regx = new RegExp(regxString);
	
	const noRepeatDigit = '^(?!.*(.).*\\1)\\d{' + digits.length + '}$';
	
	const regxNoRepeat = new RegExp(noRepeatDigit);

	const all = results.filter((el) => 
			el && regx.test(`${el}`));

	return all;
};

assembleWholeNumbers.noRepeatInArgs = (...digits) => 
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
	
	const regx = new RegExp(regxString);
	
	const noRepeatDigit = '^(?!.*(.).*\\1)\\d{' + digits.length + '}$';
	
	const regxNoRepeat = new RegExp(noRepeatDigit);

	const all = results.filter((el) => 
			el && regx.test(`${el}`)
			&& regxNoRepeat.test(`${el}`));

	return all;
};



