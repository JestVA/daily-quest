// ES6 fat-arrow syntax
const sum = ((x, y, z) => (...args) => args.reduce((a, b) => a + b))();

// started from this
const sum = (function(x, y, z) {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    }})();
    console.log(sum(1, 2, 3));