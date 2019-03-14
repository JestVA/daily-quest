function generateRange(min, max, step) {
    return [...rangeGenerator(min, max, step)];
  }
  
  function* rangeGenerator(min, max, step) {
    while (min <= max) {
      yield min;
      min += step;
    }
  }

