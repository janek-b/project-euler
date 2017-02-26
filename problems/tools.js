// reusable functions for project euler exercises

module.exports = {
  isPrime: function(number) {
    if (number % 2 === 0) {
      return false;
    };
    var factor = 3;
    while (factor < number**0.5+1) {
      if (number % factor === 0) {
        return false;
      };
      factor += 2;
    };
    return true;
  },
  isPalindrome: function(input) {
    var string = input.toString();
    var palindrome = true;
    for (var i = 0; i < Math.floor(string.length / 2); i++) {
      if (string[i] != string[string.length-(i+1)]) {
        palindrome = false;
      }
    }
    return palindrome
  }
};
