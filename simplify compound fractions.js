// 6kyu

/* Write a function that will simplify a compound fraction. As input, it should accept three arguments as integers: integer, numerator, and denominator. It should return an array with three items, all integers: [integer, numerator, denominator]. If there should be no integer, or no fraction resulting from simplification, just return zeros in their place.

There is a convenience function you can use called toString(integer, numerator, denominator). It also takes three integer values, and returns a string of the compound fraction for logging, etc.

For example:

// 4 3/2 (four and three halves)
simplify(4, 3, 2); // == [5, 1, 2]
// becomes 5 1/2 (five and one half)

// 15/12 (fifteen twelfths)
simplify(0, 15, 12); // == [1, 1, 4]
// becomes 1 1/4 (one and one quarter) */

// 분수를 소수로 변경
// 실패 => 최대공약수를 사용할것
function s(i, n, d){
    let result = []
    
    result[0] = Math.floor(n/d) + i
    result[1] = n%d
    if(d%result[1] === 0){
      resuk
      result[2] = d/result[1]
    } else{
      result[2] = d
    } 
    return result
  }
  


function simplify(n, x, y) {
  (n += ~~(x / y)), (x %= y);
  const gcd = (a, b) => (b ? gcd(b, a % b) : a),
    g = gcd(x, y);
  return x ? [n, x / g, y / g] : [n, 0, 0];
}

function simplify(i, n, d) {
  if (d == 0) return [i, 0, 0];
  var x = i * d + n;
  n = x % d;
  i = (x - n) / d;
  if (n == 0) return [i, 0, 0];
  var gcd = (a, b) => (b ? gcd(b, a % b) : a);
  x = gcd(n, d);
  return [i, n / x, d / x];
}


