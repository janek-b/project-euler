var tools = require('./tools');

function problem6() {
  var limit = 100;
  var sumOfSquare = 0;
  var sums = 0;
  for (var i = 1; i <= limit; i++) {
    sumOfSquare = sumOfSquare + (i ** 2);
    sums = sums + i;
  }
  var squareOfSums = sums ** 2;
  return squareOfSums - sumOfSquare
}

console.log(problem6());
