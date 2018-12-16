// fail soft destructuring

const list = [2, 25]
const [a = 1, b = 2, c = 3, d] = list
console.log(a, b, c, d)
// 2 25 3 undefined