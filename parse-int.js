// parse int simple
function convertToInteger(str) {
  return parseInt(str)  
  }
  
  convertToInteger("56");
  console.log(convertToInteger("0002345000abcd"))
// if first character in string is not a number it returns NaN
// very useful to split vaalues of type number from strings



// parse int with argument(radix)
// use radix to specify the base in which the numbers you want converted are
// i.e. use radix of 2 to convert numbers from binary to base 10
function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011");

