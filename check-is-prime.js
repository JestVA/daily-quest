// isPrime()
const isPrime = n => {
    const floor = ~~(Math.sqrt(n))
    for (let i = 2; i <= floor; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    // console.log(n)
    return n >= 2;
}

