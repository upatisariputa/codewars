/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

// 주어진 초를 시,분,초로 변경

function humanReadable(seconds) {
  // TODO
  let time = [0, 0, 0];
  time[2] = parseInt(seconds % 60);
  time[1] = parseInt((seconds / 60) % 60);
  time[0] = parseInt(seconds / 60 / 60);
  time[2] < 10 ? (time[2] = "0" + time[2].toString()) : time[2];
  time[1] < 10 ? (time[1] = "0" + time[1].toString()) : time[1];
  time[0] < 10 ? (time[0] = "0" + time[0].toString()) : time[0];
  return time.join(":");
}

// 다른 사람 풀이
function humanReadable(seconds) {
  var pad = function(x) {
    return x < 10 ? "0" + x : x;
  };
  // 10 이하를 나 처럼 나눈게 아니라 함수로 변경
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ":" +
    pad(parseInt((seconds / 60) % 60)) +
    ":" +
    pad(seconds % 60)
  );
}
