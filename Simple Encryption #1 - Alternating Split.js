// 6 kyu

/* For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

This kata is part of the Simple Encryption Series:
Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty

Have fun coding it and please don't forget to vote and rank this kata! :-) */

// encrypt 함수는 짝수번째의 문자열을 먼저 더한 뒤 홀수번째의 문자열을 더함
// decrypt 함수는 encrypt 함수 복호

function f(t, n) {
  if (n <= 0 || t.length <= 0 || t === null) return t;
  let splitT = t.split("");
  let resultArr = [];
  for (let k = 0; k < n; k++) {
    splitT = t.split("");
    resultArr = [];
    for (let i = 1; i < splitT.length; i = i + 2) {
      resultArr.push(splitT[i]);
    }
    for (let j = 0; j < splitT.length; j = j + 2) {
      resultArr.push(splitT[j]);
    }
    t = resultArr.join("");
  }
  return resultArr.join("");
}

function df(t, n) {
  if (n <= 0 || t.length <= 0 || t === null) return t;
  let lengthT = t.length;
  let lastT = t[t.length - 1];
  let splitT = t.split("");
  let half = parseInt(t.length / 2);
  let backStr = splitT.splice(0, half);
  let resultArr = [];
  for (let j = 0; j < n; j++) {
    splitT = t.split("");
    half = parseInt(t.length / 2);
    backStr = splitT.splice(0, half);
    resultArr = [];
    for (let i = 0; i < half; i++) {
      resultArr.push(splitT[i] + backStr[i]);
    }
    t = resultArr.join("");
  }
  return lengthT % 2 === 0 ? t : t + lastT;
}

// 다른사람 풀이

function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = "";
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}
