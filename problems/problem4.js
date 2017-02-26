var tools = require('./tools');

function problem4() {
  var startNum1 = 999;
  var startNum2 = 999;
  var palindrome = 0;
  for (var i = 0; i < startNum1; i++) {
    for (var j = 0; j < startNum2; j++) {
      var prod = (startNum1 - i) * (startNum2 -j);
      if (tools.isPalindrome(prod) && prod > palindrome) {
        palindrome = prod;
      };
    };
  };
  return palindrome;
};


console.log(problem4());
