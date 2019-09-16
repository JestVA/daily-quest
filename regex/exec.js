// https://www.codewars.com/kata/validate-code-with-simple-regex/
const validateCode = code => (+/(^\d)/g.exec(code)[0] >= 1) && (+/(^\d)/g.exec(code)[0] <= 3)

// alternative way, better 
function validateCode (code) {return /^[123]/.test(code)}
