var tools = require('./tools');

function problem7() {
  var primeArray = [2];
  var count = 3;
  while (primeArray.length < 10001) {
    if (tools.isPrime(count)) {
      primeArray.push(count);
    };
    count += 2;
  };
  return primeArray.pop();
};

console.log(problem7());
