// 5kyu

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// 배열속 0를 마지막으로 이동 하라

var moveZeros = function(arr) {
  // TODO: Program me
  let resultArr = [];
  let zeroArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      resultArr.push(arr[i]);
    } else {
      zeroArr.push(0);
    }
  }
  return resultArr.concat(zeroArr);
};

// 다른 사람
var moveZeros = function(arr) {
  return arr
    .filter(function(x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function(x) {
        return x === 0;
      })
    );
};
