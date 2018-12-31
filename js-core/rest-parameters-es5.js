// // Rest parameter ES5
// function printIt(start, end) {
//   const other = Array.prototype.slice.call(arguments, 2);
//   return start + ' ' +
//         other.join(', ') + end;
// }

// console.log(printIt('Welcome',
//         '!',
//         'Dorin',
//         ))

// Rest parameter ES6

const printIt = (start, end, ...other) => 
    console.log(
      `${start} ${other.join(', ')} ${end}`
    )

console.log(
  printIt(
    'Welcome',
    '!',
    'Dorin',
    'Lucia',
    'Zola',
    'Dita',
  )
)