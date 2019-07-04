// 내 풀이
function digPow(n, p) {
  let stringN = String(n).split("");
  let sqrtArr = [];
  for (let i = p; i < stringN.length + p; i++) {
    sqrtArr.push(stringN[i - p] ** i);
  }
  let sum = sqrtArr.reduce((acc, curr) => (acc += curr));
  return Number.isInteger(sum / n) ? sum / n : -1;
}

// 다른사람 풀이
function digPow(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}
