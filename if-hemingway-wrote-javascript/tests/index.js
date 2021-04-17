const PerformanceMeasure = require('performance-measure')
const hemingwayFibo = require('../fibonacci/hemingway')
const shakespeareFibo = require('../fibonacci/shakespeare')
const bretonFibo = require('../fibonacci/breton')

const fiboTests = (iterations, size) => {
  const fibPerf = new PerformanceMeasure()

  for (let i = 0; i < iterations; i++) {
    fibPerf.start('Hemingway')
    hemingwayFibo(size)
    fibPerf.end('Hemingway')

    fibPerf.start('Shakespeare')
    shakespeareFibo(size)
    fibPerf.end('Shakespeare')

    fibPerf.start('Breton')
    bretonFibo(size)
    fibPerf.end('Breton')
  }

  console.log(fibPerf.print())
}

console.log('=== FIBONACCI PERFORMANCE TESTS ===')
fiboTests(1000, 10000)
