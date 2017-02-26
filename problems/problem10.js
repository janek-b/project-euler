var tools = require('./tools');

function problem10() {
  var primes = [2];
  var limit = 2000000;
  for (var i = 3; i < limit; i+=2) {
    if (tools.isPrime(i)) {
      primes.push(i);
    };
  };
  return primes.reduce((sum, num) => sum += num, 0);
};


console.log(problem10());
