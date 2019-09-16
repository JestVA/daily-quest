// https://www.codewars.com/kata/first-non-repeating-character/

const firstNonRepeatingLetter = s => {
	if(!s)
	  return '';
	let found = [];
	
	  const matches = s.match(/./g).map(letter => letter.toLowerCase());
	  matches.forEach((char, i) => {
		  if(found.length == 0) {
		  if(matches.indexOf(char) == matches.lastIndexOf(char))
			  return found.push({char, i});
		  }
	  })
	  if(found.length)
		  return [...s][found[0].i];
	  else
		  return '';
}