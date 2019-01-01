// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
const narcissistic = value => {
    const morphArray = value.toString().split('').map(Number)
    const powerLength = morphArray.length
    return (morphArray.map(e => e**powerLength).reduce((a, c) => a + c) === value)
    }

