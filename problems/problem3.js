var tools = require('./tools');

function problem3(numberInput) {
  var arr = [];
  var number = numberInput;
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      if (tools.isPrime(i) && !(arr.includes(i))) {
        arr.push(i);
      };
      num = number / i;
      if (tools.isPrime(num) && !(arr.includes(num))) {
        arr.push(num);
      }
      else {
        number = num;
        i = 1;
      };
    };
  };
  return arr;
};


console.log(problem3(600851475143));
