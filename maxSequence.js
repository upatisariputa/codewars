// 나의 풀이
var max = function(arr) {
  let result = [];
  if (arr.length === 0) {
    return 0;
  }
  function isUpZero(n) {
    return n < 0;
  }
  if (!arr.every(isUpZero)) {
    for (let j = 0; j < arr.length; j++) {
      for (let i = arr.length; i > 0; i--) {
        result.push(arr.slice(j, i));
      }
    }
    let sum = [];
    for (let k = 0; k < result.length; k++) {
      if (result[k].length > 0) {
        sum.push(result[k].reduce((acc, curr) => (acc += curr)), 0);
      }
    }
    return Math.max.apply(null, sum);
  } else {
    return 0;
  }
};

// 다른사람

var maxSequence = function(arr) {
  var min = 0,
    ans = 0,
    i,
    sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
};

// 다른사람
var maxSequence = function(arr) {
  var currentSum = 0;
  return arr.reduce(function(maxSum, number) {
    currentSum = Math.max(currentSum + number, 0);
    return Math.max(currentSum, maxSum);
  }, 0);
};
