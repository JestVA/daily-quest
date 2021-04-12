/*
 * The Fibonacci sequence is the series of numbers whereby each new number is the sum of the previous two.
 */

// ES5
function fibonacci(size) {
  var first = 0,
    second = 1,
    next,
    count = 2,
    result = [first, second]

  if (size < 2) return 'the request was made but it was not good'

  while (count++ < size) {
    next = first + second
    first = second
    second = next
    result.push(next)
  }

  return result
}

// ES6^
const _fibonacci = (size) => {
  let first = 0,
    second = 1,
    next,
    count = 2,
    result = [first, second]

  if (size < 2) return 'the request was made but it was not good'

  while (count++ < size) {
    next = first + second
    first = second
    second = next
    result.push(next)
  }

  return result
}
