const accum = (s) => s.split("").map((letter, index) => letter.toUpperCase() + Array(index).fill(letter.toLowerCase()).join('')).join('-')
