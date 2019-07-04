function squareDigits(num) {
  //may the code be with you
  return parseInt(
    num
      .toString()
      .split("")
      .map(item => item ** 2)
      .join("")
  );
}

// 간단한 문제 숫자의 모든 자릿수의 제곱
