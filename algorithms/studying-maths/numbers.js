// Build a function that returns all possible whole numbers from any given digits (0-9)

const assembleWholeNumbers = (...digits) => 
{	
	// some tests
		// repeat digit in sequence: 1, 1, 1
			// should create 1 whole number 
		// include 0 digit in sequence: 0, 1, 2
			// should create 4 whole numbers 
	

	// Calculates the n!  
	const numberOfPossiblePermutations = Array(digits.length)
		.fill()
		.map((e,i) => i + 1)
		.reduce((a, c) => a *= c);
	
	// Assemble the possible whole numbers through brute force
	// Pick reasonable solutions (filter numbers that repeat)



}; 
