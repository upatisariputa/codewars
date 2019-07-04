// 4kyu

// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// 순열 알고리즘
// https://velog.io/@rohkorea86/%EC%88%9C%EC%97%B4-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98

// 다른사람 풀이
function permu(a) {
  return a.reduce(
    function(list, element) {
      var newlist = [];

      list.forEach(function(seq) {
        for (var i = seq.length; i >= 0; i--) {
          var newseq = [].concat(seq);
          newseq.splice(i, 0, element);
          newlist.push(newseq);
        }
      });
      return newlist;
    },
    [[]]
  );
}

var a = [1, 2, 3];
