// 소수 판별 (시간 제한)
// 내 풀이
// 시간 초과
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 다른 사람 풀이

function isP(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i++) {
    // i*i로 시간 줄이기
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
