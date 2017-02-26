var tools = require('./tools');

function problem5() {
  var limit = 20;
  var largestPrime = 0;
  for (var i = 0; i < limit; i++) {
    var num = limit - i;
    if (tools.isPrime(num)) {
      largestPrime = num;
      break;
    };
  };
  var startNum = largestPrime;
  var numFound = false;
  while (numFound === false) {
    var notIt = false;
    for (var i = 1; i <= limit; i++) {
      if (startNum % i != 0) {
        notIt = true;
      }
    }
    if (notIt) {
      startNum = startNum + largestPrime;
    } else {
      numFound = true;
    };
  };
  return startNum;
};

console.log(problem5());
