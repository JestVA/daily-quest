// https://www.codewars.com/kata/crazy-programmer-02-insert-advertising-code/train/javascript

// Solution: 

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

