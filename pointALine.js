// 6kyu

// 기울기 구하기 (세점 이상)

// 실패
function o(p) {
  let incline1 = 0;
  let incline2 = 0;
  incline1 = (p[1][1] - p[0][1]) / (p[1][0] - p[0][0]);
  incline2 = (p[2][1] - p[1][1]) / (p[2][0] - p[1][0]);

  return incline1 === incline2;
}

// 다른사람 풀이
function onLine(points) {
  if (points.length < 3) return true;
  var x = points.shift();
  var a = undefined;
  return points
    .filter(function(y) {
      return !(x[0] == y[0] && x[1] == y[1]);
    })
    .map(function(y) {
      return (a = (x[0] - y[0]) / (x[1] - y[1]));
    })
    .every(function(y) {
      return y == a;
    });
}
