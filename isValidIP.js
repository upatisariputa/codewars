// 내 풀이
function isValidIP(str) {
  let splitStr = str.split(".");
  let splitStrNum = str.split(".").map(item => parseInt(item));
  let result = true;
  if (splitStr.length !== 4) {
    return (result = false);
  }
  for (let i = 0; i < 4; i++) {
    if (
      splitStrNum[i] < 0 ||
      splitStrNum[i] > 255 ||
      typeof splitStrNum[i] !== "number" ||
      splitStr[i] !== String(splitStrNum[i])
    ) {
      return (result = false);
    }
  }
  return result;
}

// 다른 풀이(정규식)
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

// 다른풀이
function isValidIP(str) {
  return (
    str.split(".").filter(function(v) {
      return v == Number(v).toString() && Number(v) < 256;
    }).length == 4
  );
}
