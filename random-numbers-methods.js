// get decimal numbers
function randomFraction() {

  return Math.random();

}

// get whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// random numbers in a specified range
function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; 
}

var myRandom = randomRange(1, 15);
console.log(myRandom)