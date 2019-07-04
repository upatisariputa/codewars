/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

// n을 정수로 받아서 2진수의 1을 모두 더하시오

var coutBits = function(n) {
  return n
    .toString(2)
    .split("")
    .reduce((acc, curr) => (acc += parseInt(curr)), 0);
};

// 다른 사람 풀이
function countBits(n) {
  for (c = 0; n; n >>= 1) c += n & 1;
  return c;
}

// 정규식
var countBits = function(n) {
  return n.toString(2).replace(/0/g, "").length;
};
