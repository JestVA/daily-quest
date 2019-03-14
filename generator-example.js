function generateRange(min, max, step) {
    return [...rangeGenerator(min, max, step)];
  }
  
  function* rangeGenerator(min, max, step) {
    while (min <= max) {
      yield min;
      min += step;
    }
  }

/*  
* remember you can return a comparison that evaluates directly to a boolean without the need for extra ternary or if statements 
*/