// 5kyu

//What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.

function f(x, y) {
  let xx = x
    .split("")
    .sort()
    .join("");

  let yy = y.map(el =>
    el
      .split("")
      .sort()
      .join("")
  );
  let result = [];
  for (let i = 0; i < yy.length; i++) {
    yy[i] === xx ? result.push(y[i]) : x;
  }
  return result;
}

// 다른사람

String.prototype.sort = function() {
  return this.split("")
    .sort()
    .join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
    return x.sort() === word.sort();
  });
}

//
function anagrams(word, words) {
  word = word
    .split("")
    .sort()
    .join("");
  return words.filter(function(v) {
    return (
      word ==
      v
        .split("")
        .sort()
        .join("")
    );
  });
}
