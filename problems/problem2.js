var tools = require('./tools');

function problem2() {
  var sequence = [1, 2];
  var number = 0;
  var total = 0;
  while (number <= 4000000) {
    number = sequence[sequence.length -1] + sequence[sequence.length - 2];
    sequence.push(number);
  };
  sequence.forEach(function(term) {
    if (term % 2 === 0) {
      total += term;
    };
  });
  return total;
};

console.log(problem2());
