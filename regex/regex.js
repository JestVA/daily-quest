const shortenToDate = longDate => longDate.replace(/,.+$/,'');

const reg = /(,.+$)/m

const replacer = (match, p1, offset, string) =>
{

	console.log(offset)
	console.log(string)
	return [...p1].reverse().join``

}

const shortenToDateReversed = longDate => longDate.replace(reg, replacer)

shortenToDateReversed("2019, Aug, 17, 4 pm")