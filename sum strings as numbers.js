// 4kyu

// 두 문자열을 더함, 지수형으로 표현하지 않음

// 다른사람 풀이

function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

function add(a, b) {
  var aa = Array.from(a, Number),
    bb = Array.from(b, Number),
    result = [],
    carry = 0,
    i = Math.max(a.length, b.length);

  while (i--) {
    carry += (aa.pop() || 0) + (bb.pop() || 0);
    result.unshift(carry % 10);
    carry = Math.floor(carry / 10);
  }
  while (carry) {
    result.unshift(carry % 10);
    carry = Math.floor(carry / 10);
  }
  return result.join("");
}

function sumStrings(a, b) {
  if (b.length > a.length) {
    var temp = a;
    a = b;
    b = temp;
  }
  while (b.length < a.length) {
    b = "0" + b;
  }
  a = a
    .split("")
    .reverse()
    .join("");
  b = b
    .split("")
    .reverse()
    .join("");
  var c = "",
    i = 0;
  var carry = 0;
  for (var i = 0; i < a.length; i++) {
    var result = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = 0;
    if (result >= 10) {
      result -= 10;
      carry++;
    }
    c = c + result;
  }
  if (carry !== 0) {
    c = c + "1";
  }
  while (c[c.length - 1] === "0") {
    c = c.slice(0, c.length - 1);
  }
  c = c
    .split("")
    .reverse()
    .join("");
  return c;
}
