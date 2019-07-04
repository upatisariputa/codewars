// 6kyu

/* Upside-Down Pyramid Addition is the process of taking a list of numbers and consecutively adding them together until you reach one number.

When given the numbers 2, 1, 1 the following process occurs:
2   1   1
  3   2 
    5 
  */

/*  YOUR TASK
 Given the right side of an Upside-Down Pyramid (Ascending), write a function that will return the original list.
 
 EXAMPLE
 reverse([5, 2, 1]) => [2, 1, 1]
 NOTE: The Upside-Down Pyramid will never be empty and will always consist of positive integers ONLY. */

// 피라미드 더하기 역순으로

function reverse(right) {
  // Your code goes here!
  let r = right;
  let resultArr = [];
  let rr = r;
  let resultArray = [];
  for (let i = 0; i < r.length; i++) {
    resultArray.push(rr[rr.length - 1]);
    resultArr = [];
    result = 0;
    for (let j = 0; j < rr.length - 1; j++) {
      resultArr.push(rr[j] - rr[j + 1]);
    }
    rr = resultArr;
  }
  return resultArray.reverse();
}

// 다른사람
function reverse(r) {
  return r.reduce(
    (a, n) =>
      a.reduceRight((b, s) => (b.push(s - b[b.length - 1]), b), [n]).reverse(),
    []
  );
}

function reverse(right) {
  let i, j;

  for (j = 0; j < right.length - 1; j++)
    for (i = 0; i <= right.length - j - 2; i++)
      right[i] = right[i] - right[i + 1];

  return right;
}
